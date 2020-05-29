import { combineReducers } from 'redux'
import UserReducer from './user/userReducer'
import LabourReducer from './labour/labourReducer'
import ContractorReducer from './contractor/contractorReducer'




export const combineAllReducer = combineReducers({
  user: UserReducer,
  labour: LabourReducer,
  contractor: ContractorReducer
})


export const initalState = {
  user: [],
  labour: [],
  contractor: [],
};