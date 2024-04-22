import {
  Button, Heading, Menu, MenuButton, MenuItem, MenuList,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Switch,
  useColorMode
} from '@chakra-ui/react'
import React from "react";
import Module from "../../../components/Module/Module";
import {FaAngleDown, FaRegMoon, FaRegUser, FaSignOutAlt} from "react-icons/fa";
import {RiCelsiusFill, RiFahrenheitFill} from "react-icons/ri";


export default function SettingsModule() {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <Module title='Indstillinger'>
        <Stack direction='column' spacing={4}>
          <Button leftIcon={<FaRegMoon />} colorScheme='teal' variant='solid' onClick={toggleColorMode}>
            Skift til {colorMode === 'light' ? 'mørk' : 'lys'} tilstand
          </Button>
          <Heading size='sm'>
            Skift profil
          </Heading>
          <Button rightIcon={<FaRegUser />} colorScheme='teal' variant='outline'>
            Profil
          </Button>
          <Heading size='sm'>
            Vis temperaturen i celsius eller fahrenheit
          </Heading>
          <Menu>
            <MenuButton as={Button} rightIcon={<FaAngleDown />}>
              Skift her
            </MenuButton>
            <MenuList>
              <MenuItem icon={<RiCelsiusFill/>}>
                Celsius
              </MenuItem>
              <MenuItem icon={<RiFahrenheitFill/>}>
                Fahrenheit
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Module>
    </>
  )
}
