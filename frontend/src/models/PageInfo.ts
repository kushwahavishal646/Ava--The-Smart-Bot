export interface IPageInfo {
  pageSize?: number;
  offset?: number;
}

export class PageInfo {
  pageSize;
  offset;

  constructor(pageDetail: IPageInfo) {
    this.pageSize = pageDetail.pageSize;
    this.offset = pageDetail.offset;
  }
}
