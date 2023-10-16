import { SetUserProfileActions } from '../../feature/auth/actions/UserProfile';
import { ReportsActions } from '../../feature/reports/actions';

type RootAction = SetUserProfileActions
| ReportsActions;

export default RootAction;
