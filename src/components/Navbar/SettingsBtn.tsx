import {Button, Menu, MenuButton, MenuItem, MenuList, useColorMode} from '@chakra-ui/react'
import React from "react";
import {FaAngleDown, FaRegMoon} from 'react-icons/fa';


export default function SettingsBtn() {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FaAngleDown />}
        aria-label='Settings'
      >
        Settings
      </MenuButton>
      <MenuList>
        <MenuItem icon={<FaRegMoon/>} onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'dark' : 'light'} mode
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
