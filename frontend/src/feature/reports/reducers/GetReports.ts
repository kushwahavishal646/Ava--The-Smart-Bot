import { Reducer } from 'redux';

import { Reports, mergeTwoLists } from '../models/Reports';
import { GetReportsActionTypes, GetReportsActions } from '../actions/GetReports';
import { PageInfo } from '../../../models/PageInfo';
import { IErrorActionData } from '../../../models/Error';
import { defaultCursorValue, defaultPageSize } from '../../../constants/Common';

export interface IGetReportsState {
  reports: Reports;
  pageInfo: PageInfo;
  isProcessing: boolean;
  isSuccess: boolean;
  error?: IErrorActionData;
}

const initialOrderListState = {
  reports: new Reports([]),
  pageInfo: new PageInfo({
    pageSize: defaultPageSize,
    offset: defaultCursorValue,
  }),
  isProcessing: false,
  isSuccess: false,
  error: undefined,
} as IGetReportsState;

const GetReportsReducer: Reducer<IGetReportsState, GetReportsActions> = (
  state = initialOrderListState,
  action: GetReportsActions,
): IGetReportsState => {
  switch (action.type) {
    case GetReportsActionTypes.GET_REPORTS:
      return {
        ...state,
        isProcessing: true,
        isSuccess: false,
        error: undefined,
      };

    case GetReportsActionTypes.GET_REPORTS_SUCCESS: {
      const newReports = mergeTwoLists(
        state.reports.reports,
        action.payload.reports,
      );
      return {
        ...state,
        reports: new Reports(newReports),
        pageInfo: new PageInfo({
          pageSize: action.payload.pageInfo.pageSize,
          offset: action.payload.pageInfo.offset,
        }),
        isProcessing: false,
        isSuccess: true,
        error: undefined,
      };
    }

    case GetReportsActionTypes.GET_REPORTS_FAILED:
      return {
        ...state,
        isProcessing: false,
        isSuccess: false,
        error: {
          errorCode: action.payload.errorCode,
          errorMessage: action.payload.errorMessage,
          callBack: action.payload.callBack,
        },
      };

    case GetReportsActionTypes.GET_REPORTS_RESET:
      return initialOrderListState;

    default:
      return state;
  }
};

export default GetReportsReducer;
