import React from "react";
import {Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text} from "@chakra-ui/react";
import {ChartType} from "./ChartTypes";
import {ApexOptions} from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface ChartCardProps {
  heading: string
  description: string
  chartType: ChartType
  chartData: ApexOptions
}


export default function ChartCard({ heading, description, chartType, chartData }: ChartCardProps) {

  return (
    <Box>
      <Card maxW='sm' h='xl'>
        <CardBody>
          <ReactApexChart
            options={chartData}
            series={chartData.series}
            type={chartType}
            height={350}
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'> {heading} </Heading>
            <Text>
              {description}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Print
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Settings
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  )
}