import { createAction, ActionType } from 'typesafe-actions';

import { IUserProfileData, PermissionApiStructure } from '../models/UserProfile';

export enum SetUserProfileActionTypes {
  SET_USER_PROFILE_ACTION = 'SET_USER_PROFILE_ACTION',
  SET_USER_PROFILE_RESET_ACTION = 'SET_USER_PROFILE_RESET_ACTION',
}

export interface ISetUserProfileSuccessActionData {
  authorisationToken: string;
  userData?: IUserProfileData;
  permissions?: PermissionApiStructure[];
}

export const setUserProfile = createAction(
  SetUserProfileActionTypes.SET_USER_PROFILE_ACTION,
)<ISetUserProfileSuccessActionData>();

export const setUserProfileReset = createAction(SetUserProfileActionTypes.SET_USER_PROFILE_RESET_ACTION)();

export type SetUserProfileAction = ActionType<typeof setUserProfile>;
type SetUserProfileResetAction = ActionType<typeof setUserProfileReset>;

export type SetUserProfileActions = SetUserProfileAction | SetUserProfileResetAction;
