import React from 'react';
import { Routes, useLocation, useNavigationType, createRoutesFromChildren, matchRoutes } from 'react-router-dom';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  release: process.env.REACT_APP_SENTRY_RELEASE,
  environment: process.env.REACT_APP_ENV,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      ),
    }),
  ],
  tracesSampler: () => {
    if (window.location.hostname === 'localhost') {
      return 0;
    }
    return process.env.REACT_APP_ENV === 'PROD' ? 0.2 : 0.1;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  beforeSend(event: any) {
    if (window.location.hostname === 'localhost') {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return event;
  },
});

export const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);
