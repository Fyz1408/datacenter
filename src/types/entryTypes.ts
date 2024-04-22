import { sensor } from "./sensor"

export type Entry = {
  id: number,
  key_fob_id: number,
  sensor_id: number,
  approved: boolean,
  created_date: string,
  updated_date: string,
  sensor: sensor
}

export type EntryResponse<T> = {
  logs: T[];
}