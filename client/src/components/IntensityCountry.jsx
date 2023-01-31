import React, { useEffect } from "react";
import { HStack, Text, VStack } from "@chakra-ui/react";
import FilterMenu from "./FilterMenu";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useState } from "react";
import axios from "axios";

const IntensityCountry = () => {
  const [year, setYear] = useState("EndYear");
  const [region, setRegion] = useState("Region");
  const [data, setData] = useState([]);
  const filter = useSelector((state) => state.filter);
  
  useEffect(() => {
    const filterData = async () => {
        const res = await axios.post(`/data/filter`, {
          country: "Country",
          source: "Source",
          pestle: "Pestle",
          sector: "Sector",
          topic: "Topic",
          end_year: year,
          region: region,
        });
        setData(res.data.data);
      };
    filterData();
  }, [year, region]);

  const handleClick = async (event) => {
    if (event.target.name === "end_year") setYear(event.target.value);
    if (event.target.name === "region") setRegion(event.target.value);
  };

  const country = [];
  const intensity = [];
  data.map((item) =>
    item.country === "" ? null : (
      country.push(item.country),
      intensity.push(item.intensity)
  )
  );
  const end_year = Array.from(filter.end_year);
  const allRegion = Array.from(filter.region);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Country VS Intensity",
      },
    },
  };
  const chartData = {
    labels: country,
    datasets: [
      {
        label: "Intensity",
        data: intensity,
        backgroundColor: "#7367f0",
      },
    ],
  };
  return (
    <>
      <VStack
        border={"1px solid #6457fa"}
        m={"2"}
        p={"2"}
        borderRadius={"10"}
        width={["100%","50%"]}
        height={['fit-content',"60vh"]}
        justifyContent={"center"}
        alignItems={"center"}
        bg={country.length === 0 ? "#7367f0" : "white"}
      >
        <HStack gap={"50"} mt={"3"} width={"100%"} textAlign={"right"} px={"5"}>
          {/* <Menu>
          <MenuButton bg={"#00c5ff"} as={Button}>
            <HStack>
              <Text>
                {year}
              </Text>
              <IoIosArrowDown />
            </HStack>
          </MenuButton>
          <MenuList maxH={"50vh"} overflowY={"scroll"}>
            {end_year
              .sort()
              .map((item, i) => (
                <MenuItem
                  key={i}
                  name="end_year"
                  value={item}
                  onClick={handleClick}
                >
                  <Text>{item}</Text>
                </MenuItem>
              ))}
          </MenuList>
        </Menu> */}
          <FilterMenu
            menuName={"end_year"}
            value={year}
            data={end_year}
            func={handleClick}
          />
          <FilterMenu
            menuName={"region"}
            value={region}
            data={allRegion}
            func={handleClick}
          />
        </HStack>
        {country.length === 0 ? (
          <Text
            w={"100%"}
            fontWeight={"bold"}
            color={"white"}
            textAlign={"center"}
          >
            NO DATA AVAILABLE
          </Text>
        ) : (
          <Bar data={chartData} options={options} />
        )}
      </VStack>
    </>
  );
};

export default IntensityCountry;
