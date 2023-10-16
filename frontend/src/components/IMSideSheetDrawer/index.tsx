import React, { FunctionComponent } from 'react';

import { Box, Paper } from '@mui/material';

import clsx from 'clsx';

import Footer, { IMFooterProps } from './footer';
import Header, { IMHeaderProps } from './header';
import useStyles from './styles';

type ClassType = {
  drawerContainer?: string;
  contentArea?: string;
};

export interface IDrawerProps {
  content: React.ReactNode;
  drawerOpen: boolean;
  onClose?: (data?: any) => void;
  largeDrawer?: boolean;
  hideHeader?: boolean;
  header?: IMHeaderProps;
  hideFooter?: boolean;
  footer?: IMFooterProps;
  classes?: ClassType;
}

interface IMSideSheetDrawerProps {
  primaryDrawer: IDrawerProps;
  secondaryDrawer?: IDrawerProps;
}

const IMSideSheetDrawer: FunctionComponent<IMSideSheetDrawerProps> = (props) => {
  const classes = useStyles();
  return (
    // <Drawer
    //   anchor="right"
    //   open={props.primaryDrawer.drawerOpen}
    //   onClose={props.primaryDrawer.onClose}
    //   classes={{ modal: classes.modal, paper: classes.drawer }}
    //   hideBackdrop
    // >
    <Box className={classes.rootContainer}>
      <Paper
        className={clsx(
          classes.container,
          props.primaryDrawer.classes?.drawerContainer,
          props.primaryDrawer.largeDrawer && classes.containerLarge,
        )}
      >
        {!props.primaryDrawer.hideHeader && (
          <Header {...props.primaryDrawer.header} onClose={props.primaryDrawer.onClose} />
        )}
        <Paper className={clsx(classes.contentArea, props.primaryDrawer.classes?.contentArea)} variant="outlined">
          {props.primaryDrawer.content}
        </Paper>
        {!props.primaryDrawer.hideFooter && <Footer {...props.primaryDrawer.footer} />}
      </Paper>
      {props.secondaryDrawer?.drawerOpen && (
        <Paper
          className={clsx(
            classes.container,
            props.secondaryDrawer.classes?.drawerContainer,
            props.secondaryDrawer.largeDrawer && classes.containerLarge,
          )}
        >
          {!props.secondaryDrawer.hideHeader && (
            <Header {...props.secondaryDrawer.header} onClose={props.secondaryDrawer.onClose} />
          )}
          <Paper className={clsx(classes.contentArea, props.secondaryDrawer.classes?.contentArea)} variant="outlined">
            {props.secondaryDrawer.content}
          </Paper>
          {!props.secondaryDrawer.hideFooter && <Footer {...props.secondaryDrawer.footer} />}
        </Paper>
      )}
    </Box>
    // </Drawer>
  );
};

export default IMSideSheetDrawer;
