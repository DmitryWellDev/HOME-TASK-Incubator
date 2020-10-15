import {combineReducers, createStore} from "redux";
import {hwReducer} from './hwReducer'

let reducers = combineReducers({
    usersData: hwReducer
})

export type RootStateType = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store