import {value_type} from "./valueType";
import {sensor} from "./sensor";

export type Temperature = {
  id: number,
  value_type_id: number,
  sensor_id: number,
  value: string,
  created_date: string,
  updated_date: string,
  value_type: value_type,
  sensor: sensor
}

export type TemperatureResponse = {
  id: number,
  value_type_id: number,
  sensor_id: number,
  value: string,
  created_date: string,
  updated_date: string,
  value_type: value_type,
  sensor: sensor
}