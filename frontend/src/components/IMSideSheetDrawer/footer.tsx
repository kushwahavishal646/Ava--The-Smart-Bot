import React, { FunctionComponent } from 'react';

import { Box, Button, Paper, Typography } from '@mui/material';

import clsx from 'clsx';

import useStyles from './styles';

type ClassType = {
  footerInfoText?: string;
  primaryBtn?: string;
  primaryBtnTitle?: string;
  secondaryBtn?: string;
  secondaryBtnTitle?: string;
  footerContainer?: string;
  footerBtnContainer?: string;
};

export interface IMFooterProps {
  id?: string;
  footerInfoId?: string;
  footerInfoText?: string;
  primaryBtnId?: string;
  hidePrimaryBtn?: boolean;
  disablePrimaryBtn?: boolean;
  primaryBtnTitle?: string;
  primaryBtnAction?: () => void;
  secondaryBtnId?: string;
  hideSecondaryBtn?: boolean;
  disableSecondaryBtn?: boolean;
  secondaryBtnTitle?: string;
  secondaryBtnAction?: () => void;
  classes?: ClassType;
}

const IMFooter: FunctionComponent<IMFooterProps> = (props) => {
  const classes = useStyles();
  const id = `DrawerFooter${Math.round(Math.random() * 10000)}`;

  return (
    <Paper className={clsx(classes.footerContainer, props.classes?.footerContainer)} id={props.id}>
      {props.footerInfoText && (
        <Typography
          id={`${props.footerInfoId || `${id}-info-title`}`}
          className={clsx(classes.footerTitle, props.classes?.footerInfoText)}
          noWrap
        >
          {props.footerInfoText}
        </Typography>
      )}
      <Box className={clsx(classes.footerBtnContainer, props.classes?.footerBtnContainer)}>
        {!props.hideSecondaryBtn && (
          <Button
            id={`${props.secondaryBtnId || `${id}-button-secondary`}`}
            disabled={props.disableSecondaryBtn}
            onClick={props.secondaryBtnAction}
            className={clsx(classes.secondaryBtn, props.classes?.secondaryBtn)}
            classes={{ text: clsx(classes.secondaryBtnText, props.classes?.secondaryBtnTitle) }}
          >
            {props.secondaryBtnTitle}
          </Button>
        )}
        {!props.hidePrimaryBtn && (
          <Button
            id={`${props.primaryBtnId || `${id}-button-primary`}`}
            disableFocusRipple
            disabled={props.disablePrimaryBtn}
            onClick={props.primaryBtnAction}
            className={clsx(classes.primaryBtn, props.classes?.primaryBtn)}
            classes={{ text: clsx(classes.primaryBtnText, props.classes?.primaryBtnTitle) }}
          >
            {props.primaryBtnTitle}
          </Button>
        )}
      </Box>
    </Paper>
  );
};

export default IMFooter;
