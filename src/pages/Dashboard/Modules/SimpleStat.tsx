import {Stack, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, useColorMode} from '@chakra-ui/react'
import React from "react";
import Module from "../../../components/Module/Module";


export default function SimpleStat() {
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <Module title={`Statisk for idag`} displayDate={true}>
        <Stack direction='column' spacing={4}>
          <Stat>
            <StatLabel>Gennemsnitlig målt temperatur idag</StatLabel>
            <StatNumber>22.4</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              3%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Gennemsnitlig luftfugtighed idag</StatLabel>
            <StatNumber>43%</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              7%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Højeste målte temperatur idag</StatLabel>
            <StatNumber>26</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              23%
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Laveste målte temperatur idag</StatLabel>
            <StatNumber>21.45</StatNumber>
            <StatHelpText>
              <StatArrow type='decrease' />
              14%
            </StatHelpText>
          </Stat>
        </Stack>
      </Module>
    </>
  )
}
