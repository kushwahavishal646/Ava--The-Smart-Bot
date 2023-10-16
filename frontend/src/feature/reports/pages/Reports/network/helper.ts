interface INode {
  id: number;
  label: string;
  title?: string;
  shape?: string;
  group?: 'focusNode' | 'firstLevel' | 'secondLevel' | 'thirdLevel';
  size?: number;
}

interface IEdge {
  from: number;
  to: number;
}

export interface IGraph {
  nodes: Array<INode>;
  edges: Array<IEdge>;
}

export const graphData: IGraph = {
  nodes: [
    { id: 1, label: 'Infra Market\nTech', shape: 'circle', group: 'focusNode' },
    { id: 2, label: 'IM-Rise', shape: 'circle', group: 'firstLevel' },
    { id: 3, label: 'PCC', shape: 'circle', group: 'firstLevel' },
    { id: 4, label: 'IM-Elevate', shape: 'circle', group: 'firstLevel' },

    { id: 5, label: 'Catalogue', shape: 'circle', group: 'secondLevel' },
    { id: 6, label: 'Cart', shape: 'circle', group: 'secondLevel' },
    { id: 7, label: 'Credit', shape: 'circle', group: 'secondLevel' },
    { id: 8, label: 'Orders', shape: 'circle', group: 'secondLevel' },

    { id: 9, label: 'Figma', shape: 'circle', group: 'thirdLevel' },
    { id: 10, label: 'Confluence', shape: 'circle', group: 'thirdLevel' },
    { id: 11, label: 'Jira', shape: 'circle', group: 'thirdLevel' },
    { id: 12, label: 'Figma', shape: 'circle', group: 'thirdLevel' },
    { id: 13, label: 'Confluence', shape: 'circle', group: 'thirdLevel' },
    { id: 14, label: 'Jira', shape: 'circle', group: 'thirdLevel' },
    { id: 15, label: 'Figma', shape: 'circle', group: 'thirdLevel' },
    { id: 16, label: 'Confluence', shape: 'circle', group: 'thirdLevel' },
    { id: 17, label: 'Jira', shape: 'circle', group: 'thirdLevel' },
    { id: 18, label: 'Figma', shape: 'circle', group: 'thirdLevel' },
    { id: 19, label: 'Confluence', shape: 'circle', group: 'thirdLevel' },
    { id: 20, label: 'Jira', shape: 'circle', group: 'thirdLevel' },

    { id: 21, label: 'UC', title: 'UC hai bro', shape: 'circle', group: 'firstLevel' },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 21 },

    { from: 2, to: 7 },
    { from: 2, to: 8 },
    { from: 2, to: 5 },
    { from: 2, to: 6 },

    { from: 7, to: 9 },
    { from: 7, to: 10 },
    { from: 7, to: 11 },

    { from: 8, to: 12 },
    { from: 8, to: 13 },
    { from: 8, to: 14 },

    { from: 5, to: 15 },
    { from: 5, to: 17 },
    { from: 5, to: 16 },

    { from: 6, to: 18 },
    { from: 6, to: 19 },
    { from: 6, to: 20 },
  ],
};
