import {useColorMode} from '@chakra-ui/react'
import React, {useEffect, useState} from "react";
import ColumnChart from "../../components/Graphs/ColumnChart";
import Module from "../../components/Module/Module";
import {ColumnData} from "../../types/ChartTypes";
import {useGetTemperatureQuery} from "../../api/apiSlice";
import {Temperature} from "../../types/temperature";

export default function HumidityModule() {
  const {colorMode, toggleColorMode} = useColorMode()
  const [tempData, setTempData] = useState<ColumnData[]>([])

  const {
    data: temperatureData,
    error: temperatureError,
    isError: temperatureIsError,
    isLoading: temperatureIsLoading,
    refetch: refetchTemperature
  } = useGetTemperatureQuery(40)


  useEffect(() => {
    if (temperatureData && temperatureData.reading.length > 0) {
      const sanitizedTemperature = temperatureData.reading
        .map((item: Temperature) => ({
          id: item.created_date,
          value: parseFloat(item.value)
        }));

      setTempData(sanitizedTemperature);
    }

  }, [temperatureData]);


  console.log(temperatureData)

  return (
    <>
      <Module title='Luftfugtighed' children={<ColumnChart data={tempData}/>} displayDate={true}/>
    </>
  )
}
