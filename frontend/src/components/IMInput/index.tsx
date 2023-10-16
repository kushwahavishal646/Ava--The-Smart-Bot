import React, { FunctionComponent } from 'react';

import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import clsx from 'clsx';

import useStyles from './styles';

type ClassType = {
  input?: string;
  error?: string;
  container?: string;
  helperText?: string;
  leftIcon?: string;
  rightIcon?: string;
  placeHolder?: string;
};

export interface IIMInputProps {
  inputLabel?: string;
  value?: string | number;
  placeHolder?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  type: 'text' | 'number' | 'password' | 'email';
  id?: string;
  name?: string;
  required?: boolean;
  defaultValue?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  onBlur?: (e: React.FocusEvent<any>) => void;
  onKeyPress?: (e: React.KeyboardEvent<any>) => void;
  error?: string;
  helperText?: string;
  classes?: ClassType;
  disabled?: boolean;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  maxLength?: number;
}

const IMInput: FunctionComponent<IIMInputProps> = (props) => {
  const classes = useStyles();

  const renderInputAdornment = (
    position: string,
    renderNode?: React.ElementType,
    renderInputAdornment?: React.ReactNode,
    classess?: string,
  ) => (
    <InputAdornment className={classess} position={position}>
      {renderNode && <renderNode />}
      {renderInputAdornment}
    </InputAdornment>
  );

  return (
    <Box className={clsx(classes.container, props.classes?.container)}>
      <TextField
        id={props.id}
        name={props.name}
        required={props.required}
        label={props.inputLabel}
        placeholder={props.placeHolder}
        value={props.value}
        defaultValue={props.defaultValue}
        onChange={(event) => {
          props?.maxLength
            ? event.target.value.length <= props?.maxLength && props.onChange(event)
            : props.onChange(event);
        }}
        onKeyPress={props.onKeyPress}
        onFocus={props.onBlur}
        type={props.type}
        variant={props.variant || 'outlined'}
        className={clsx(classes.input, props.classes?.input)}
        InputProps={{
          startAdornment:
            (props?.leftIcon || props?.startAdornment) &&
            renderInputAdornment('start', props?.leftIcon, props?.startAdornment, props?.classes?.leftIcon),
          endAdornment:
            (props?.rightIcon || props?.endAdornment) &&
            renderInputAdornment('end', props?.rightIcon, props?.endAdornment, props?.classes?.rightIcon),
        }}
        error={!!props.error}
        disabled={!!props.disabled}
      />
      {!!props.helperText && (
        <Typography className={clsx(classes.text, props.classes?.helperText)}>{props.helperText}</Typography>
      )}
      {!!props.error && (
        <Typography className={clsx(classes.text, classes.error, props.classes?.error)}>{props.error}</Typography>
      )}
    </Box>
  );
};

export default IMInput;
