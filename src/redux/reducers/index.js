import { combineReducers } from 'redux'
import UserReducer from './user/userReducer'
import LabourReducer from './labour/labourReducer'
import ContractorReducer from './contractor/contractorReducer'
import {
  combineForms,
  createForms, // optional
  formReducer
} from 'react-redux-form';

const initialUserState = {
  email: '',
  password: ''
};

export const combineAllReducer = combineReducers({
  user: UserReducer,
  labour: LabourReducer,
  contractor: ContractorReducer,
  userLoginInfo: formReducer('userLoginInfo', initialUserState)
})
