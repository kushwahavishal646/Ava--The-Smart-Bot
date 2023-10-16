import { combineReducers } from 'redux';

import ReportReducer from '../../feature/reports/reducers';
import SetUserProfileReducer from '../../feature/auth/reducers/UserProfile';

const RootReducer = combineReducers({
  reports: ReportReducer,
  userProfile: SetUserProfileReducer,
});

export default RootReducer;
