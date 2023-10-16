/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';

import { SvgIcon } from '@mui/material';

interface IInputIcon {
  width?: number;
  height?: number;
  className?: string;
}

const InputIcon: FunctionComponent<IInputIcon> = (props: IInputIcon) => (
  <SvgIcon
    width={props.width}
    height={props.height}
    fill="none"
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21 18"
  >
    <path d="M0.00999999 18L21 9L0.00999999 0L0 7L15 9L0 11L0.00999999 18Z" fill="'#363636'" />
  </SvgIcon>
);

export default InputIcon;
