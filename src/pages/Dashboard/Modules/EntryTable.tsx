import React, {useRef, useState} from "react";
import {Fade, Skeleton, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {Alarm} from "../../../types/alarmTypes";
import {useGetAlarmsQuery, useGetEntriesQuery, useGetTemperatureQuery} from "../../../api/apiSlice";
import {formatDate} from "../../../utils/date";


function EntryTable() {
  const {
    data: entryData,
    error: entryError,
    isError: entryIsError,
    isLoading: entryIsLoading,
    refetch: refetchEntries
  } = useGetEntriesQuery({amount: 30, approved: false})

  return (
    <>
      <TableContainer>
        <Table variant={entryIsLoading ? 'simple' : 'striped'} colorScheme={entryIsLoading ? 'gray' : 'whatsapp'}>
          <TableCaption> Alarmer </TableCaption>
          <Thead>
            <Tr>
              <Th> ID </Th>
              <Th> Message </Th>
              <Th> Sensor </Th>
              <Th> Is acknowledged </Th>
              <Th> Date </Th>
            </Tr>
          </Thead>
          {!entryIsLoading && entryData && entryData.logs.length > 0 ? (
            <Tbody>
              {entryData.logs.map((entry, index) => (
                <Tr key={index}>
                  <Td> {entry.id} </Td>
                  <Td> {entry.approved} </Td>
                  <Td> {entry.approved} </Td>
                  <Td> {entry.sensor_id} </Td>
                  <Td> {new Date(entry.created_date).toLocaleDateString('en-GB')}</Td>
                </Tr>
              ))}
            </Tbody>
          ) : (
            <Tbody>
              {Array.from({length: 30}, (_, index) => (
                <Tr key={index}>
                  <Td colSpan={5}>
                    <Fade in={entryIsLoading}>
                      <Skeleton h={50} isLoaded={!entryIsLoading}/>
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

export default EntryTable;
