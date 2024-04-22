import { sensor } from "./sensor"

export type Alarm = {
  id: number,
  sensor_id: number,
  message: string,
  severity: string,
  is_acknowledged: boolean,
  created_date: string,
  updated_date: string,
  sensor: sensor
}

export type AlarmResponse<T> = {
  alarm: T[];
}