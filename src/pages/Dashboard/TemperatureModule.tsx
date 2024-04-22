import {useColorMode} from '@chakra-ui/react'
import React, {useEffect, useState} from "react";
import ColumnChart from "../../components/Graphs/ColumnChart";
import Module from "../../components/Module/Module";
import {ColumnData} from "../../types/ChartTypes";
import {useGetTemperatureQuery} from "../../api/apiSlice";
import {Temperature} from "../../types/temperature";
import {formatDate, formatTime} from "../../utils/date";

export default function TemperatureModule() {
  const {colorMode, toggleColorMode} = useColorMode()
  const [tempData, setTempData] = useState<ColumnData[]>([])

  const {
    data: temperatureData,
    error: temperatureError,
    isError: temperatureIsError,
    isLoading: temperatureIsLoading,
    refetch: refetchTemperature
  } = useGetTemperatureQuery(25)


  useEffect(() => {
    if (temperatureData && temperatureData.reading.length > 0) {
      const sanitizedTemperature = temperatureData.reading
        .map((item: Temperature) => ({
          id: item.created_date,
          value: parseFloat(item.value)
        }));

      setTempData(sanitizedTemperature.reverse());
    }

  }, [temperatureData]);


  console.log(temperatureData)

  return (
    <>
      <Module title='Temperatur' children={<ColumnChart data={tempData}/>} displayDate={true}/>
    </>
  )
}
