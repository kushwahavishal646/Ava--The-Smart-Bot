import { createAction, ActionType } from 'typesafe-actions';

import { IErrorActionData } from '../../../models/Error';
import { IPageInfo } from '../../../models/PageInfo';
import { IFilter, IPage } from '../../../utils/sortFilterFramework';
import { IReportItem } from '../models/Reports';

export enum GetReportsActionTypes {
  GET_REPORTS = 'GET_REPORTS',
  GET_REPORTS_SUCCESS = 'GET_REPORTS_SUCCESS',
  GET_REPORTS_FAILED = 'GET_REPORTS_FAILED',
  GET_REPORTS_RESET = 'GET_REPORTS_RESET',
}

export interface IGetReportsActionData {
  filter?: IFilter[];
  page?: IPage;
}
export interface IGetReportsSuccessActionData {
  reports: Array<IReportItem>;
  pageInfo: IPageInfo;
}

export const getReports = createAction(GetReportsActionTypes.GET_REPORTS)<IGetReportsActionData>();
export const getReportsSuccess = createAction(GetReportsActionTypes.GET_REPORTS_SUCCESS)
<IGetReportsSuccessActionData>();
export const getReportsFailure = createAction(GetReportsActionTypes.GET_REPORTS_FAILED)
<IErrorActionData>();
export const getReportsReset = createAction(GetReportsActionTypes.GET_REPORTS_RESET)();

export type GetReportsAction = ActionType<typeof getReports>;
type GetReportsSuccessAction = ActionType<typeof getReportsSuccess>;
type GetReportsFailedAction = ActionType<typeof getReportsFailure>;
type GetReportsResetAction = ActionType<typeof getReportsReset>;

export type GetReportsActions =
  | GetReportsAction
  | GetReportsSuccessAction
  | GetReportsFailedAction
  | GetReportsResetAction;
