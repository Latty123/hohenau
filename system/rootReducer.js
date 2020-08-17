import { combineReducers } from '@reduxjs/toolkit';
import { AppDuck } from './index';

const rootReducer = combineReducers({ app: AppDuck.appSliceReducer });

export default rootReducer;