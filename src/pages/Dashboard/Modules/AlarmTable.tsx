import React from "react";
import {Fade, Skeleton, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useGetAlarmsQuery} from "../../../api/apiSlice";
import {formatDate} from "../../../utils/date";


function AlarmTable() {
  const {
    data: alarmData,
    error: alarmError,
    isError: alarmIsError,
    isLoading: alarmIsLoading,
    refetch: refetchAlarms
  } = useGetAlarmsQuery({amount: 30, acknowledged: false})

  return (
    <>
      <TableContainer>
        <Table variant={alarmIsLoading ? 'simple' : 'striped'} colorScheme={alarmIsLoading ? 'gray' : 'whatsapp'}>
          <TableCaption> Alarmer </TableCaption>
          <Thead>
            <Tr>
              <Th> ID </Th>
              <Th> Besked </Th>
              <Th> Sensor </Th>
              <Th> Alarm registreret? </Th>
              <Th> Date </Th>
            </Tr>
          </Thead>
          {!alarmIsLoading && alarmData && alarmData.alarm.length > 0 ? (
            <Tbody>
              {alarmData.alarm.map((alarm, index) => (
                <Tr key={index}>
                  <Td> {alarm.id} </Td>
                  <Td> {alarm.message} </Td>
                  <Td> {alarm.sensor.name} </Td>
                  <Td> {alarm.is_acknowledged ? 'Ja' : 'Nej'} </Td>
                  <Td> {formatDate(alarm.created_date)}</Td>
                </Tr>
              ))}
            </Tbody>
          ) : (
            <Tbody>
              {Array.from({length: 30}, (_, index) => (
                <Tr key={index}>
                  <Td colSpan={5}>
                    <Fade in={alarmIsLoading}>
                      <Skeleton h={50} isLoaded={!alarmIsLoading}/>
                    </Fade>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>
    </>
  );
}

export default AlarmTable;
