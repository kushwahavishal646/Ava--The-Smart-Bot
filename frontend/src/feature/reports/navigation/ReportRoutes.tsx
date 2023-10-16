import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../../../layout';
import Reports from '../pages/Reports';

const ReportRoutes: FunctionComponent = () => {

  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Reports />} />
      </Route>
    </Routes>
  );
};

export default ReportRoutes;
