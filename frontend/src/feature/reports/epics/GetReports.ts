/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { isOfType } from 'typesafe-actions';
import { filter, map, mergeMap, catchError } from 'rxjs/operators';
import { StateObservable } from 'redux-observable';
import { from, of } from 'rxjs';

import {
  getReportsSuccess,
  getReportsFailure,
  GetReportsAction,
  GetReportsActionTypes,
} from '../actions/GetReports';
import getReportsService from '../services/GetReports';
import { IErrorActionData } from '../../../models/Error';
import RootState from '../../../config/store/RootState';

const GetReportsEpic = (action$: any, state$: StateObservable<RootState>) => action$.pipe(
  filter(isOfType(GetReportsActionTypes.GET_REPORTS)),
  mergeMap((action: GetReportsAction) => from(
    getReportsService(
      action.payload.filter,
      action.payload.page,
    ),
  ).pipe(
    map((response) => getReportsSuccess({
      reports: response.data.getReports.data || [],
      pageInfo: response.data.getReports.pageInfo,
    })),
    catchError((error: IErrorActionData) => of(
      getReportsFailure({
        errorCode: error.errorCode || 500,
        errorMessage: error.errorMessage,
        callBack: error.callBack,
      }),
    )),
  )),
);

export default GetReportsEpic;
