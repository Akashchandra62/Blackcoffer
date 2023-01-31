import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Text, HStack, Button } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

const FilterMenu = ({menuName, value, data, func}) => {
  return (
    <Menu>
          <MenuButton bg={"#00c5ff"} as={Button}>
            <HStack>
              <Text>
                {value}
              </Text>
              <IoIosArrowDown />
            </HStack>
          </MenuButton>
          <MenuList maxH={"50vh"} overflowY={"scroll"}>
            {data
              .sort()
              .map((item, i) => (
                <MenuItem
                  key={i}
                  name={menuName}
                  value={item}
                  onClick={func}
                >
                  <Text>{item}</Text>
                </MenuItem>
              ))}
          </MenuList>
        </Menu>
  )
}

export default FilterMenu