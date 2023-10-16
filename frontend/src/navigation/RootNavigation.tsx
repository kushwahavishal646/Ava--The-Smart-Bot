import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AllRoutes from './AllRoutes';

const RootNavigation: FunctionComponent = () => (
  <Router>
    <AllRoutes />
  </Router>
);

export default RootNavigation;
