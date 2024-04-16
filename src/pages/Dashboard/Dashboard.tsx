import {Flex, Heading, useColorModeValue} from "@chakra-ui/react";
import {useGetTemperatureQuery} from "../../api/apiSlice";

function Dashboard() {
  const {
    data: temperatureData,
    error: temperatureError,
    isError: temperatureIsError,
    isLoading: temperatureIsLoading,
    refetch: refetchTemperature
  } = useGetTemperatureQuery(15)

  console.log(temperatureData)

  return (
    <>
      <Flex
        h='100vh'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
      >
        <Heading mb={3}>
          Dashboard
        </Heading>



      </Flex>
    </>
  );
}

export default Dashboard