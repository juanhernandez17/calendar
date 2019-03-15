import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './calendarConstants'
import { createReducer } from '../../app/comm/util/reducerUtil'
import moment from 'moment'
import cuid from 'cuid'
const eventos = [
  {
      id: cuid(),
      start: new Date(),
      end: new Date(moment().add(1, "days")),
      title: "Some title"
    }
];

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)]
}

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ]
}

export const deleteEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.eventId)
  ]
}


export const calendarReducer = createReducer(eventos, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
})