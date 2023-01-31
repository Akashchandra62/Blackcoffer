import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <VStack mt={'5'} p={'5'} borderTop={'2px solid black'} justifyContent={'space-around'}>
        <HStack justifyContent={'space-around'} w={'100%'}>
        <Button bg={'black'} color={'white'}> Thank You</Button>
        <Text>copyright ©️AkashChandra 2023</Text>
        </HStack>
        <Text color={'red'} fontWeight={'extrabold'}>Contact: akashchandra8544@gmail.com</Text>
    </VStack>
  )
}

export default Footer