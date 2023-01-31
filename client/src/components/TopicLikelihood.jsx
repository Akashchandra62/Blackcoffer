import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import {  HStack, Text, VStack } from "@chakra-ui/react";
import FilterMenu from "./FilterMenu";

const TopicLikelihood = () => {
  const [year, setYear] = useState("2016");
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState("Topic");
  const filter = useSelector((state) => state.filter);
  

  useEffect(() => {
    const filterData = async () => {
      const res = await axios.post(`/data/filter`, {
        country: "Country",
          source: "Source",
          pestle: "Pestle",
          sector: "Sector",
          topic: topic,
          end_year: year,
          region: "Region"
      });
      setData(res.data.data);
    };
    filterData();
  }, [year, topic]);

  const allTopics = [];
  const allLikelihood = [];
  data.map(item => {
    if(item.topic !== ""){
        allTopics.push(item.topic);
        if(item.likelihood !== "") allLikelihood.push(item.likelihood);
        else allLikelihood.push(0);
    }
    return item;
  })

  ChartJS.register(ArcElement, Tooltip, Legend);

  const chartData = {
    labels: allTopics,
    datasets: [
      {
        label: "# of Likelihood",
        data: allLikelihood,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Topic VS Likelihood",
      },
    },
  };

  const end_year = Array.from(filter.end_year);
  const allTopic = Array.from(filter.topic);

  const handleClick = async (event) => {
    if (event.target.name === "end_year") setYear(event.target.value);
    if (event.target.name === "topic") setTopic(event.target.value);
  };

  return (
    <HStack
      border={"1px solid #6457fa"}
      m={"2"}
      p={"2"}
      borderRadius={"10"}
      width={["100%","45%"]}
      height={['fit-content',"60vh"]}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={allTopics.length === 0 ? "#7367f0" : "#e1deff"}
      flexDirection ={['column' ,'row']}
    >
      <VStack justifyContent={'flex-start'}  h={'100%'} gap={"30"} my={"3"}   px={"5"}>
          <FilterMenu
            menuName={"end_year"}
            value={year}
            data={end_year}
            func={handleClick}
          />
          <FilterMenu
            menuName={"topic"}
            value={topic}
            data={allTopic}
            func={handleClick}
          />
        </VStack>
        {allTopics.length === 0 ? (
          <Text
            w={"100%"}
            fontWeight={"bold"}
            color={"white"}
            textAlign={"center"}
          >
            NO DATA AVAILABLE
          </Text>
        ) : (
          <Pie data={chartData} options={options}/>
        )}
      
    </HStack>
  );
};

export default TopicLikelihood;
