/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUserProfile } from '../actions/UserProfile';
import { useTypedSelector } from '../../../config/store';
import { WindowEventService, WindowEvents } from '../../../utils/pubsub';

export interface IProps {
  children: React.ReactNode;
}

const AuthAppHandler: FunctionComponent<IProps> = (props: IProps) => {
  const navigate = useNavigate();
  const userProfileState = useTypedSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const isJWTAvailable = localStorage.getItem('userLoginToken');

  const handLoggedIn = (data: any) => {
    localStorage.setItem('userProfileState', JSON.stringify(data.detail.userData));
    dispatch(setUserProfile(data.detail));
  };

  useEffect(() => {
    if (isJWTAvailable && Object.keys(userProfileState.userProfileData?.userData).length) {
      navigateToHome();
    }
  }, [isJWTAvailable, userProfileState.userProfileData]);

  const navigateToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    WindowEventService.subscribe(WindowEvents.LoggedIn, handLoggedIn);
    return () => {
      WindowEventService.unsubscribe(WindowEvents.LoggedIn, handLoggedIn);
    };
  }, []);

  return <>{props.children}</>;
};

export default AuthAppHandler;
