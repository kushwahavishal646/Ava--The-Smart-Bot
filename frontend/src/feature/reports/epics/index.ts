import { combineEpics } from 'redux-observable';

import GetReportsEpic from './GetReports';

export const ReportEpic = combineEpics(
  GetReportsEpic,
);
