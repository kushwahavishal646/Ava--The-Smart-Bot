import React, { FunctionComponent } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, Paper, Typography } from '@mui/material';

import clsx from 'clsx';

import useStyles from './styles';
import Ava from '../../assets/svg/Ava';

type ClassType = {
  title?: string;
  primaryBtn?: string;
  primaryBtnTitle?: string;
  headerContainer?: string;
};

export interface IMHeaderProps {
  titleId?: string;
  primaryButtonId?: string;
  closeIconId?: string;
  hideCloseBtn?: boolean;
  title?: string;
  hidePrimaryBtn?: boolean;
  disablePrimaryBtn?: boolean;
  primaryBtnTitle?: string;
  primaryBtnAction?: () => void;
  onClose?: () => void;
  classes?: ClassType;
}

const IMHeader: FunctionComponent<IMHeaderProps> = (props) => {
  const classes = useStyles();
  const id = `DrawerHeader${Math.round(Math.random() * 10000)}`;

  return (
    <Paper className={clsx(classes.headerContainer, props.classes?.headerContainer)}>
      {props.title && (
        <Typography
          id={`${props.titleId || `${id}-info-title`}`}
          noWrap
          className={clsx(classes.headerTitle, props.classes?.title)}
        >
          {props.title}
        </Typography>
      )}
      <Ava className={classes.ava} />
      {/* {!props.hidePrimaryBtn && (
        <Button
          disableRipple
          id={`${props.primaryButtonId || `${id}-button-primary`}`}
          disabled={props.disablePrimaryBtn}
          onClick={props.primaryBtnAction}
          className={clsx(classes.headerPrimaryBtn, props.classes?.primaryBtn)}
          classes={{ text: clsx(classes.headerPrimaryBtnText, props.classes?.primaryBtnTitle) }}
        >
          {props.primaryBtnTitle}
        </Button>
      )}
      {!props.hideCloseBtn && (
        <IconButton id={`${props.closeIconId || `${id}-button-close`}`} onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
      )} */}
    </Paper>
  );
};

export default IMHeader;
