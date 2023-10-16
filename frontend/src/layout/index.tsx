import React, { FunctionComponent, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import clsx from 'clsx';

// import Sidebar from './Sidebar';
import useStyles from './styles';

const Layout: FunctionComponent = () => {
  const classes = useStyles();

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  window.onoffline = () => {
    setIsOnline(navigator.onLine);
  };

  window.ononline = () => {
    setIsOnline(navigator.onLine);
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        {/* <Sidebar /> */}
        <main className={clsx(classes.main, !isOnline && classes.offlineMain)}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
