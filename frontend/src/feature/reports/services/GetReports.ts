import { gql } from '@apollo/client';

import client from '../../../config/apolloClient';
import { IFilter, IPage, constructUrlWithParams } from '../../../utils/sortFilterFramework';
import URL from '../../../constants/ApiEndPoints';

const GET_REPORTS = gql`
  query getReports($path: String!) {
    getReports @rest(method: "GET", path: $path, endpoint: "infra") {
      data
      pageInfo
    }
  }
`;

const getReportsService = (filter?: IFilter[], page?: IPage) => {
  const url = constructUrlWithParams(URL.getReportList, filter, undefined, page);
  return client.query({ query: GET_REPORTS, variables: { path: url } });
};

export default getReportsService;
