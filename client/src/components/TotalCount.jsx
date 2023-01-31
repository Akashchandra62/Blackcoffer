import { HStack, Text, VStack } from "@chakra-ui/react";
import React  from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import FilterMenu from "./FilterMenu";

const TotalCount = () => {
  const data = useSelector((state) => state.data.data);
  const filter = useSelector((state) => state.filter);
  const [year, setYear] = useState('2016');
  let country = new Set();
  let region = new Set();
  let end_year = new Set();
  let topic = new Set();
  let sector = new Set();
  let pestle = new Set();
  let source = new Set();

  const update = () => {
    data.map((item) => {
      if (item.end_year === year) {
        country.add(item.country);
        region.add(item.region);
        end_year.add(item.end_year);
        topic.add(item.topic);
        sector.add(item.sector);
        pestle.add(item.pestle);
        source.add(item.source);
      }
      return item;
    });
  }
update()
  

  const handleClick = async (event) => {
    setYear(event.target.value);
  };

  return (
    <VStack
      border={"1px solid #6457fa"}
      m={"2"}
      p={"2"}
      borderRadius={"10"}
      width={["100%", "30%"]}
      height={["fit-content"]}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={data.length === 0 ? "#7367f0" : "#e1deff"}
      gap={"0"}
    >
      <FilterMenu
        menuName={"end_year"}
        value={year}
        data={Array.from(filter.end_year)}
        func={handleClick}
      />
      <HStack
        justifyContent={"space-between"}
        w={"100%"}
        p={"2"}
        fontSize={"1.3rem"}
      >
        <Text fontWeight={"extrabold"}>Total Country</Text>
        <Text color={"red"} fontWeight={"bold"}>
          {Array.from(country).length}
        </Text>
      </HStack>
      <HStack
        justifyContent={"space-between"}
        w={"100%"}
        p={"2"}
        fontSize={"1.3rem"}
      >
        <Text fontWeight={"extrabold"}>Total Region</Text>
        <Text color={"red"} fontWeight={"bold"}>
          {Array.from(region).length}
        </Text>
      </HStack>
      <HStack
        justifyContent={"space-between"}
        w={"100%"}
        p={"2"}
        fontSize={"1.3rem"}
      >
        <Text fontWeight={"extrabold"}>Total Topic</Text>
        <Text color={"red"} fontWeight={"bold"}>
          {Array.from(topic).length}
        </Text>
      </HStack>
      <HStack
        justifyContent={"space-between"}
        w={"100%"}
        p={"2"}
        fontSize={"1.3rem"}
      >
        <Text fontWeight={"extrabold"}>Total Sector</Text>
        <Text color={"red"} fontWeight={"bold"}>
          {Array.from(sector).length}
        </Text>
      </HStack>
      <HStack
        justifyContent={"space-between"}
        w={"100%"}
        p={"2"}
        fontSize={"1.3rem"}
      >
        <Text fontWeight={"extrabold"}>Total Pestle</Text>
        <Text color={"red"} fontWeight={"bold"}>
          {Array.from(pestle).length}
        </Text>
      </HStack>
      <HStack
        justifyContent={"space-between"}
        w={"100%"}
        p={"2"}
        fontSize={"1.3rem"}
      >
        <Text fontWeight={"extrabold"}>Total Source</Text>
        <Text color={"red"} fontWeight={"bold"}>
          {Array.from(source).length}
        </Text>
      </HStack>
    </VStack>
  );
};

export default TotalCount;
