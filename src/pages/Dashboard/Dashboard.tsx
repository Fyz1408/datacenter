import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import Module from "../../components/Module/Module";
import React from "react";
import TemperatureModule from "./TemperatureModule";
import AlarmTable from "./Modules/AlarmTable";
import {RiDatabaseLine} from "react-icons/ri";
import SimpleStat from "./Modules/SimpleStat";
import SettingsModule from "./Modules/SettingsModule";

function Dashboard() {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <Box
        justifyContent='center'
        alignItems='center'
        flexDir='column'
      >
        <Center>
          <Heading size='xl' mb={5} mt={5} textAlign='center' as={Flex} flexDir='row'>
            <RiDatabaseLine
              fontSize={50}
              color={useColorModeValue('darkgreen','lightgreen')}
            />
            <Box
              ml={1}
              mr={1}
              h='3rem'
              w='1px'
              backgroundColor={useColorModeValue('gray.300', 'gray.600')}
            />
            Datacenter
            dashboard
          </Heading>
        </Center>

        <Grid
          mr={3}
          mb={3}
          ml={3}
          templateColumns='repeat(4, 1fr)'
          gap={4}
        >
          <GridItem colSpan={2}>
            <TemperatureModule/>
          </GridItem>
          <GridItem colSpan={2}>
            <SimpleGrid columns={2} spacing={4} height='100%'>
              <SimpleStat/>
              <SettingsModule/>
            </SimpleGrid>
          </GridItem>
          <GridItem colSpan={4}>
            <Module title='Alarmer' children={<AlarmTable/>} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard