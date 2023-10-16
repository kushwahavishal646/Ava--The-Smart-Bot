/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { ApolloClient, ApolloLink, DefaultOptions, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RestLink } from 'apollo-link-rest';
import _ from 'lodash';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
  mutate: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const errorLink = onError(({ networkError = {} as any }) => {
  if (
    networkError.statusCode === 410 ||
    (networkError.statusCode === 401 && !window.location.href.includes('/login'))
  ) {
    localStorage.removeItem('userLoginToken');
    localStorage.removeItem('storeId');
    window.location.href = '/login';
  } else if (networkError.statusCode === 403) {
    window.location.href = '/nopermission';
  }
});

const authRestLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }: any) => {
    const token = localStorage.getItem('userLoginToken');
    const newHeaders = {
      ...headers,
      Accept: 'application/json',
      Authorization: token,
    };
    if (operation.variables.isPublic) {
      delete newHeaders.Authorization;
    }
    return { headers: newHeaders };
  });
  return forward(operation).map((result) => {
    const { restResponses } = operation.getContext();
    if (restResponses[0].status === 404) {
      throw new Error('Internal server error');
    }
    const authTokenResponse = restResponses.find((res: any) => res.headers.has('Authorization'));

    if (authTokenResponse) {
      localStorage.setItem('userLoginToken', authTokenResponse.headers.get('Authorization'));
    }
    return result;
  });
});

const restLink = new RestLink({
  endpoints: {
    infra: process.env.REACT_APP_API_BASE_URL || '',
  },
  fieldNameDenormalizer: (key: string) => _.snakeCase(key),
  fieldNameNormalizer: (key: string) => _.camelCase(key),
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authRestLink, errorLink, restLink]),
  defaultOptions,
});

export default client;
