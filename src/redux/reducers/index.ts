import { combineReducers } from 'redux'
import delivery from './delivery'
import commonData from './common'

const rootReducer = combineReducers({
    delivery,
    commonData
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
