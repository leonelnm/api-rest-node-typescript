import { Visibility, Weather } from './types'

export const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String
}

export const isDate = (date: string): boolean => {
  return Boolean(new Date(date))
}

export const isWeather = (string: any): boolean => {
  return Object.values(Weather).includes(string)
}

export const isVisibility = (string: any): boolean => {
  return Object.values(Visibility).includes(string)
}
