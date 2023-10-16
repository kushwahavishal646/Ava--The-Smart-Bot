import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login/Login';

const AuthRoutes: FunctionComponent = () => {

  return (
    <Routes>
      <Route path="" element={<Login />} />
    </Routes>
  );
};

export default AuthRoutes;
