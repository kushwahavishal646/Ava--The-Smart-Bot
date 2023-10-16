/* eslint-disable @typescript-eslint/no-explicit-any */
import _ from 'lodash';

export enum FilterOperands {
  EQ = '', // it is empty string because default = will be available, but still needed in FilterOperands for readability
  NE = '_ne',
  LT = '_lt',
  LTE = '_le',
  GT = '_gt',
  GTE = '_ge',
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export interface IPage {
  pageSize?: number;
  offset?: number;
}

export interface ISort {
  property?: string;
  direction?: SortDirection;
}

export interface IFilter {
  property: string;
  operand: FilterOperands;
  value: any;
}

/**
 *
 * @param filters
 */

export const convertFilterToUrlParams = (filters: IFilter[]) => filters.reduce(
  (prevResult, item) => (item.value ? prevResult.concat(
    _.snakeCase(item.property), item.operand, '=', Array.isArray(item.value) ? `[${item.value.toString()}]` : item.value, '&',
  ) : prevResult), '',
);

/**
 *
 * @param sortObj
 */

export const convertSortToUrlParams = (sortObj: ISort = {}) => {
  if (!sortObj.property) return '';
  return 'order_by='.concat(_.snakeCase(sortObj.property || ''), '&order_type=', sortObj.direction || SortDirection.ASC, '&');
};

/**
 *
 * @param pageInfo
 */

export const convertPageInfoToUrlParams = (pageInfo: IPage = {}) => {
  let pageInfoQuery = '';
  if (pageInfo.pageSize !== undefined) pageInfoQuery = 'page_size='.concat(pageInfo.pageSize.toString(), '&');
  if (pageInfo.offset !== undefined) pageInfoQuery = pageInfoQuery.concat(`page_number=${pageInfo.offset}`);
  return pageInfoQuery;
};

export const constructUrlWithParams = (url: string, filter: IFilter[] = [], sort?: ISort, pageInfo?: IPage) => url.concat('?',
  convertFilterToUrlParams(filter),
  convertSortToUrlParams(sort),
  convertPageInfoToUrlParams(pageInfo));
