import { Visibility, Weather } from '../enums'
import { NewDiaryEntry } from '../types'
import { isDate, isString, isVisibility, isWeather } from '../utils'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }

  if (!isWeather(weatherFromRequest)) {
    throw new Error('Unexpected value of weather')
  }

  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }

  if (!isVisibility(visibilityFromRequest)) {
    throw new Error('Unexpected value of visibility')
  }

  return visibilityFromRequest
}

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}
