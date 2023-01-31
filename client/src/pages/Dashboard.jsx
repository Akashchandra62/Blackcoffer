import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import IntensityCountry from "../components/IntensityCountry";
import Navbar from "../components/Navbar";
import TopicLikelihood from "../components/TopicLikelihood";
import TotalCount from "../components/TotalCount";
import Footer from "../components/Footer.jsx";
import TopicVsYear from "../components/TopicVsYear";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Box>
        <HStack justifyContent={"space-around"} flexWrap={"wrap"} >
          <IntensityCountry />
          <TopicLikelihood />
        </HStack>
        <HStack justifyContent={"space-around"} flexWrap={"wrap"}>
          <TotalCount/>
          <TopicVsYear/>
        </HStack>
      </Box>
      <Footer/>
    </>
  );
};

export default Dashboard;
