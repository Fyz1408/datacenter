import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL} from "../config/constants";
import {apiResponse} from "../types/apiResponse";
import {TemperatureResponse} from "../types/temperature";

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

  }),
})

// Export hooks for usage in function components
export const {
  useGetTemperatureQuery
} = iotApi