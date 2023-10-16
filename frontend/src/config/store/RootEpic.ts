/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { combineEpics } from 'redux-observable';

import { ReportEpic } from '../../feature/reports/epics';

const RootEpic = combineEpics(
  ReportEpic,
);

export default RootEpic;
