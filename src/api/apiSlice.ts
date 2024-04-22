import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL} from "../config/constants";
import {apiResponse} from "../types/apiResponse";
import {TemperatureResponse} from "../types/temperature";
import {Alarm, AlarmResponse} from "../types/alarmTypes";
import {Entry, EntryResponse} from "../types/entryTypes";

export const iotApi = createApi({
  reducerPath: 'iotApi',
  baseQuery: fetchBaseQuery({
    headers: {
      'Accept': 'application/json',
    },
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTemperature: builder.query<apiResponse<TemperatureResponse>, number>({
      query: (amount) => ({
        url: `/get_temp?amount=${amount}`,
        method: 'GET',
      })
    }),
    getAlarms: builder.query<AlarmResponse<Alarm>, {amount: number, acknowledged: boolean}>({
      query: ({amount, acknowledged}) => ({
        url: `get_alarm?amount=${amount}&is_acknowledged=${acknowledged}`,
        method: 'GET',
      })
    }),
    getEntries: builder.query<EntryResponse<Entry>, {amount: number, approved: boolean}>({
      query: ({amount, approved}) => ({
        url: `get_entry_logs?amount=${amount}&approved=${approved}`,
        method: 'GET',
      })
    }),
  }),
})

// Export hooks for usage in function components
export const {
  useGetTemperatureQuery,
  useGetAlarmsQuery,
  useGetEntriesQuery
} = iotApi