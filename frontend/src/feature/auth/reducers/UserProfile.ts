import { Reducer } from 'redux';

import { SetUserProfileActions, SetUserProfileActionTypes } from '../actions/UserProfile';
import { IUserProfileData, UserProfileData } from '../models/UserProfile';
import { constructPermission } from '../../../utils/common';

export interface ISetUserProfileState {
  userProfileData: UserProfileData;
}

const initialSetUserProfileState: ISetUserProfileState = {
  userProfileData: new UserProfileData('', {} as IUserProfileData),
};

const SetUserProfileReducer: Reducer<ISetUserProfileState, SetUserProfileActions> = (
  state = initialSetUserProfileState,
  action: SetUserProfileActions,
): ISetUserProfileState => {
  switch (action.type) {
    case SetUserProfileActionTypes.SET_USER_PROFILE_ACTION:
      return {
        userProfileData: new UserProfileData(
          action.payload?.authorisationToken,
          action.payload?.userData,
          constructPermission(action.payload.permissions),
        ),
      };

    case SetUserProfileActionTypes.SET_USER_PROFILE_RESET_ACTION:
      return initialSetUserProfileState;

    default:
      return state;
  }
};

export default SetUserProfileReducer;
