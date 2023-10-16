import { ISetUserProfileSuccessActionData } from '../../feature/auth/actions/UserProfile';
import { IGetReportsState } from '../../feature/reports/reducers/GetReports';

type RootState = {
  getReportsState: IGetReportsState;
  userProfile: ISetUserProfileSuccessActionData;
};

export default RootState;
