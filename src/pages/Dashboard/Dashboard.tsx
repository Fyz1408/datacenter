import {Flex, Heading, useColorModeValue} from "@chakra-ui/react";

function Dashboard() {

  return (
    <>
      <Flex
        h='100vh'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
        backgroundColor={useColorModeValue('white', 'Black')}
      >
        <Heading mb={3}>
          Dashboard
        </Heading>

      </Flex>
    </>
  );
}

export default Dashboard