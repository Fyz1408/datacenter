import {Card, CardBody, CardHeader, Divider, Heading, Text, useColorMode, useColorModeValue} from '@chakra-ui/react'
import React from "react";
import { getTodaysDate } from '../../utils/date';
import ExampleChart from "../Graphs/examples/ExampleChart";


interface ModuleProps {
  title: string;
  displayDate?: boolean;
  children: React.ReactNode;
}

export default function Module({title, displayDate = false, children}: ModuleProps) {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <Card backgroundColor={useColorModeValue('gray.200', 'gray.900')}>
        <CardHeader>
          <Heading size='md'> {title} </Heading>
          <Divider/>
          <Text color={useColorModeValue('blue.500', 'blue.300')} fontSize='medium'>
            {displayDate ? getTodaysDate() : ''}
          </Text>
        </CardHeader>
        <CardBody>
          {children}
        </CardBody>
      </Card>

    </>
  )
}
