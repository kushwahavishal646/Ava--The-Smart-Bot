import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Graph from 'react-vis-network-graph';

import { IGraph, graphData } from './helper';
import useStyles from './styles';

interface INetwork {
  network: Array<'figma' | 'confluence' | 'jira'>;
}

const Network: React.FC<INetwork> = (props) => {
  const classes = useStyles();

  const [graph, setGraph] = useState<IGraph>(graphData);

  // const events = {
  //   select: function (event) {
  //     const { nodes } = event;
  //     const connectedNodeIds: number[] = [];

  //     graph.edges.forEach((edge) => {
  //       if (edge.from === nodes?.[0]) {
  //         connectedNodeIds.push(edge.to);
  //       }
  //       if (edge.to === nodes?.[0]) {
  //         connectedNodeIds.push(edge.from);
  //       }
  //     });

  //     const updatedNodes = graph.nodes.map((node) => ({
  //       ...node,
  //       group: node.id === nodes?.[0] ? 'focusNode' : connectedNodeIds.includes(node.id) ? 'connectedNode' : '',
  //     }));

  //     setGraph({
  //       ...graph,
  //       nodes: updatedNodes,
  //     });
  //   },
  // };

  // const events = {
  //   select: function (event) {
  //     const { nodes } = event;
  //     const clickedNodeId = nodes[0];

  //     // Deselect all nodes when no node is selected
  //     if (!clickedNodeId) {
  //       const updatedNodes = graph.nodes.map((node) => ({
  //         ...node,
  //         group: '', // Set group to an empty string for all nodes
  //       }));

  //       setGraph({
  //         ...graph,
  //         nodes: updatedNodes,
  //       });
  //     } else {
  //       const connectedNodeIds: number[] = [];

  //       graph.edges.forEach((edge) => {
  //         if (edge.from === clickedNodeId) {
  //           connectedNodeIds.push(edge.to);
  //         }
  //         if (edge.to === clickedNodeId) {
  //           connectedNodeIds.push(edge.from);
  //         }
  //       });

  //       const updatedNodes = graph.nodes.map((node) => ({
  //         ...node,
  //         group: node.id === clickedNodeId ? 'focusNode' : connectedNodeIds.includes(node.id) ? 'connectedNode' : '',
  //       }));

  //       setGraph({
  //         ...graph,
  //         nodes: updatedNodes,
  //       });
  //     }
  //   },
  // };

  const options = {
    interaction: {
      navigationButton: true,
      zoomSpeed: 0.5,
      focusNode: '3',
    },
    layout: {
      hierarchical: {
        enabled: false,
        levelSeparation: 600,
        nodeSpacing: 600,
        treeSpacing: 600,
      },
      circularLayout: true,
    },
    nodes: {
      shape: 'dot',
      size: 20,
      scaling: {
        min: 10,
        max: 40,
      },
      font: {
        size: 20,
        weight: 700,
        color: '#FFFFFF',
      },
      color: {
        border: '#434A4D',
        background: '#434A4D',
        highlight: {
          border: '#363636',
          background: '#617277',
        },
      },
    },
    groups: {
      focusNode: {
        color: {
          background: '#3A2D63',
          border: '#363636',
        },
        font: {
          size: 28,
          weight: 100,
          color: '#ffffff',
        },
      },
      firstLevel: {
        color: {
          background: '#302D38',
          border: '#363636',
        },
        font: {
          size: 23,
          weight: 100,
          color: '#ffffff',
        },
      },
      secondLevel: {
        color: {
          background: '#617277',
          border: '#617277',
        },
        font: {
          size: 18,
          weight: 100,
          color: '#ffffff',
        },
      },
      thirdLevel: {
        color: {
          background: '#434A4D',
          border: '#434A4D',
        },
        font: {
          size: 13,
          weight: 100,
          color: '#ffffff',
        },
      },
    },
    edges: {
      color: {
        color: '#617277',
      },
      arrows: {
        to: { enabled: false, scaleFactor: 0.5 },
      },
      length: 200,
      // arrowStrikethrough: false,
    },
    height: '1000px',
  };

  return (
    <Box className={classes.rootContainer}>
      <Graph
        graph={graph}
        options={options}
        // events={events}
      />
    </Box>
  );
};

export default Network;
