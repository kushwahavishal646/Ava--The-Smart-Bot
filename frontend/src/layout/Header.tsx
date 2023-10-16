import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IMHeaderBar, IMLabelValue } from '@infra-market/im-web-components';
import { MenuItem, Divider, Box } from '@mui/material';
import Logout from 'auth_app/logout';
import AuthProvider from 'auth_app/Provider';

import HeaderIcon from '../assets/svg/HeaderIcon';
import { WindowEvents, WindowEventService } from '../utils/pubsub';
import { IUserProfileData } from '../feature/auth/models/UserProfile';
import { setUserProfile } from '../feature/auth/actions/UserProfile';
import useStyles from './styles';

const Header: React.FunctionComponent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userProfile: IUserProfileData = JSON.parse(localStorage.getItem('userProfileState') || '{}');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAutoLoggedIn = (data: any) => {
    dispatch(setUserProfile(data.detail));
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const navigateToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    WindowEventService.subscribe(WindowEvents.AutoLoggedIn, handleAutoLoggedIn);
    WindowEventService.subscribe(WindowEvents.Logout, handleLogout);
    return () => {
      WindowEventService.unsubscribe(WindowEvents.AutoLoggedIn, handleAutoLoggedIn);
      WindowEventService.unsubscribe(WindowEvents.Logout, handleLogout);
    };
  }, []);

  useEffect(() => {
    if (Object.keys(userProfile).length < 1) {
      localStorage.clear();
      navigate('/login');
    }
  }, []);

  const headerIcon = () => (
    <Box className={classes.headerIconContainer}>
      <HeaderIcon className={classes.headerIcon} />
    </Box>
  );

  const menuItem = () => (
    <>
      <MenuItem>
        <IMLabelValue
          id="loggedin-user"
          label={userProfile?.email ?? '-'}
          value={`${userProfile.firstName} ${userProfile.lastName}` ?? '-'}
          classes={{
            container: classes.labelValueContainer,
          }}
        />
      </MenuItem>
      <Divider />
      <AuthProvider>
        <Logout />
      </AuthProvider>
    </>
  );

  return (
    <IMHeaderBar
      id="psn_header"
      title={t('appName')}
      showAvatar
      headerLogo={headerIcon()}
      avatarMenuItem={menuItem()}
      onHeaderClick={navigateToHome}
      titleClass={classes.headerTitle}
      headerBarContainer={classes.headerContainer}
    />
  );
};

export default Header;
