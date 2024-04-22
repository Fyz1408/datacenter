import React from 'react'
import ReactApexChart from "react-apexcharts";
import {ColumnData} from "../../types/ChartTypes";
import {ApexOptions} from "apexcharts";
import {useColorModeValue} from "@chakra-ui/react";
import {formatTime} from "../../utils/date";

interface ColumnChartProps {
  data: ColumnData[]
}

const ColumnChart: React.FC<ColumnChartProps> = ({data}: ColumnChartProps) => {
  const chartOptions: ApexOptions = {
    series: [{
      name: "Temperatur (\t°C)",
      data: data.map(item => item.value),
    }],
    chart: {
      height: 350,
      type: 'bar',
    },
    stroke: {
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: data.map(item => formatTime(item.id)),
    },
    yaxis: {
      min: 15,
      max: 40,
    },
    theme: {
      mode: useColorModeValue('light', 'dark'),
    }
  };

  return (
    <>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={370}
      />
    </>
  );
};

export default ColumnChart;