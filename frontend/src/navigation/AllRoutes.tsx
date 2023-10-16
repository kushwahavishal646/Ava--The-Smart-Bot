import React, { FunctionComponent, Suspense } from 'react';
import { Navigate, Route } from 'react-router-dom';

import { SentryRoutes } from '../config/sentry';
import AuthRoutes from '../feature/auth/navigation/AuthRoutes';
import ReportRoutes from '../feature/reports/navigation/ReportRoutes';


const AllRoutes: FunctionComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SentryRoutes>
        <Route path="/login" element={<AuthRoutes />} />
        <Route path="/reports/*" element={<ReportRoutes />} />
        <Route index element={<Navigate to="reports" />} />
      </SentryRoutes>
    </Suspense>
  );
};

export default AllRoutes;
