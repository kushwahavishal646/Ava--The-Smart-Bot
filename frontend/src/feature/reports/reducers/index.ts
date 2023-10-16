import { combineReducers } from 'redux';

import GetReportsReducer from './GetReports';

const ReportReducer = combineReducers({
  getReport: GetReportsReducer,
});

export default ReportReducer;
