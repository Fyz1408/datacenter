import {Button, Menu, MenuButton, MenuItem, MenuList, useColorMode} from '@chakra-ui/react'
import React from "react";
import {FaAngleDown, FaRegMoon, FaRegUser, FaSignOutAlt} from 'react-icons/fa';


export default function UserBtn() {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<FaRegUser/>}
        rightIcon={<FaAngleDown/>}
        aria-label='User'
      >
        User
      </MenuButton>
      <MenuList>
        <MenuItem icon={<FaRegMoon/>} onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'dark' : 'light'} mode
        </MenuItem>
        <MenuItem icon={<FaSignOutAlt/>} href={'/home'} as="a">
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
