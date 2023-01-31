import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { HStack, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

const TopicVsYear = () => {
    const filter = useSelector(state => state.filter);
    const allData = useSelector(state => state.data.data);
    const end_year = Array.from(filter.end_year).sort();
    let counts = [];
    end_year.map(year => {
        let count = 0;
        allData.map(item => 
            item.end_year === year? count++: 0

        )
        counts.push(count);
        return count;
    })

    const data = {
        labels: end_year,
        datasets: [
          {
            label: 'Total Topic covered Each Year',
            data: counts,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 99, 132, 0.3)',
              'rgba(255, 99, 132, 0.4)',
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 206, 86, 0.3)',
              'rgba(255, 206, 86, 0.4)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 159, 64, 0.3)',
              'rgba(255, 159, 64, 0.4)',
              'rgba(255, 159, 64, 0.5)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 159, 64, 0.7)',
              'rgba(255, 159, 64, 0.8)',
            ],
            borderWidth: 1,
          },
        ],
      };
  return (<>
    <HStack
      border={"1px solid #6457fa"}
      m={"2"}
      p={"2"}
      borderRadius={"10"}
      width={["100%","50%"]}
      height={['fit-content',"75vh"]}
      justifyContent={"center"}
      alignItems={"center"}
      bg={false ? "#7367f0" : "#e1deff"}
    >
        <Text mt={'3'} fontWeight={'bold'} color={'red'}>Topic Covered Each Year</Text>

      {true === 0 ? (
        <Text
          w={"100%"}
          fontWeight={"bold"}
          color={"white"}
          textAlign={"center"}
        >
          NO DATA AVAILABLE
        </Text>
      ) : (
        <Doughnut data={data} />
      )}
    </HStack>
  </>
  )
}

export default TopicVsYear