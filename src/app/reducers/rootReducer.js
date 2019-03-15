import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { calendarReducer } from '../../features/calendar/calendarReducer'


const rootReducer = combineReducers({
    form: FormReducer,
    calendars: calendarReducer
})

export default rootReducer