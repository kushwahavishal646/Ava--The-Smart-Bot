import makeStyles from '@mui/styles/makeStyles';

import theme from '../../config/theme';

const useStyles = makeStyles(
  () => ({
    container: {
      margin: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 4,
      background: theme.palette.IMPrimary.contrastText,
    },
    input: {
      color: '#FFFFFF',
      '& label': {
        top: -3,
      },
      '& label.Mui-focused': {
        color: theme.palette.divider,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.IMPrimary.main,
      },
      '& .MuiInput-root:hover::before': {
        borderWidth: 1,
        borderBottomColor: theme.palette.IMPrimary.main,
      },
      '& .MuiFilledInput-root:hover::before': {
        borderBottomColor: theme.palette.IMPrimary.main,
      },
      '& .MuiFilledInput-underline:after': {
        borderColor: theme.palette.IMPrimary.main,
      },
      '& .MuiOutlinedInput-root': {
        height: 48,
        '& fieldset': {
          // borderColor: theme.palette.IMOther.stroke,
        },
        '&:hover fieldset': {
          borderColor: theme.palette.IMPrimary.main,
        },
        '&.Mui-focused fieldset': {
          borderWidth: 2,
          borderColor: theme.palette.divider,
        },
      },
      '& input[type=number]': {
        '-moz-appearance': 'textfield',
      },
      '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
      '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
    },
    text: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 400,
      color: theme.palette.text.secondary,
      textAlign: 'start',
    },
    errorInput: {
      '& .MuiInput': {
        borderColor: theme.palette.IMError.main,
      },
    },
    error: {
      color: theme.palette.IMError.main,
    },
    placeholderStyle: {
      '&::placeholder': {
        color: '#FFFFFF',
      },
    },
  }),
  { name: 'imInput' },
);

export default useStyles;
