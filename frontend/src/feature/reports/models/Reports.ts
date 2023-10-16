export interface IReportItem {
  id: string;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  namespaceId: string;
  owner: string;
}

export class Reports {
  reports = [] as Array<IReportItem>;
  constructor(reports: Array<IReportItem>) {
    this.reports = reports;
  }
}

/**
 * Merging Two Lists
 * @param existingList - existingList
 * @param payloadList - Action Payload List
 */
export const mergeTwoLists = (
  existingList: Array<IReportItem>,
  payloadList: Array<IReportItem>,
) => {
  if (!existingList.length) return payloadList;
  if (!payloadList.length) return existingList;
  return existingList.concat(payloadList);
};
