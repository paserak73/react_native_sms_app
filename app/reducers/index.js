import { combineReducers } from 'redux'
//import * as reducers from './reducers'


import dashboard from './dashboardReducer'
import user from './userReducer'
import translator from './translatorReducer'

export default combineReducers({
    dashboard,
    user,
    translator
})