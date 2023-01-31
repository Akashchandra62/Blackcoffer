import {  HStack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { add } from "../store/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/filterSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  let country = new Set();
  let region = new Set();
  let end_year = new Set();
  let topic = new Set();
  let sector = new Set();
  let pestle = new Set();
  let source = new Set();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/data");
      dispatch(add(res.data.data));
    };
    fetchData();
  }, [dispatch]);

  data.map((item) => {
    if (item.country !== "") country.add(item.country);
    if (item.region !== "") region.add(item.region);
    if (item.end_year !== "") end_year.add(item.end_year);
    if (item.topic !== "") topic.add(item.topic);
    if (item.sector !== "") sector.add(item.sector);
    if (item.pestle !== "") pestle.add(item.pestle);
    if (item.source !== "") source.add(item.source);
    return item;
  });
  dispatch(update({
    end_year: Array.from(end_year),
    region: Array.from(region),
    topic: Array.from(topic),
    country: Array.from(country),
    sector: Array.from(sector),
    pestle: Array.from(pestle),
    source: Array.from(source)
  }));

  return (
    <>

      <HStack
        justifyContent={"space-between"}
        w={"100%"}
        bg={"#e6f7fc"}
        p={["1", "4"]}
        pos={"sticky"}
      >
        <Text fontSize={"1.4rem"} fontWeight={"bold"}>
          Dashboard
        </Text>
        <Text fontSize={"1.4rem"} fontWeight={"bold"}>
          BlackCoffer
        </Text>
      </HStack>
    </>
  );
};

export default Navbar;
