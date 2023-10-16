import makeStyles from '@mui/styles/makeStyles';

import theme from '../../config/theme';

const useStyles = makeStyles(
  () => ({
    modal: {
      zIndex: 1300,
    },
    drawer: {
      width: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      transition: 'width 2s',
    },
    rootContainer: {
      // width: '25vw',
      flex: 1,
      display: 'flex',
    },
    container: {
      width: '30vw',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      borderWidth: 10,
      borderColor: '#FFFFFF',
    },
    containerLarge: {
      width: '40vw',
      maxWidth: '40vw',
    },
    headerContainer: {
      height: 64,
      borderRadius: 0,
      padding: theme.spacing(0, 4),
      boxShadow: 'inset 0px -1px 0px rgba(80, 80, 80, 0.15)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    contentArea: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      border: 0,
    },
    footerContainer: {
      height: 48,
      borderRadius: 0,
      padding: theme.spacing(1.5, 4),
      boxShadow: 'inset 0px 1px 0px rgba(80, 80, 80, 0.15)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerTitle: {
      flex: 1,
      color: theme.palette.text.primary,
      fontWeight: 500,
      fontSize: 17,
    },
    footerTitle: {
      fontSize: 12,
      color: theme.palette.text.primary,
    },
    footerBtnContainer: {
      flex: 1,
      display: 'flex',
      marginLeft: theme.spacing(2),
      justifyContent: 'flex-end',
    },
    primaryBtn: {
      height: 36,
      borderRadius: 5,
      borderWidth: 1,
      padding: theme.spacing(1.5, 4),
      borderColor: theme.palette.IMPrimary.main,
      backgroundColor: theme.palette.IMPrimary.main,
      '&:hover': {
        backgroundColor: theme.palette.IMPrimary.main,
      },
      '&:disabled': {
        color: theme.palette.IMActions.disabled,
        borderColor: theme.palette.action.disabledBackground,
        backgroundColor: theme.palette.IMActions.disabledBackground,
      },
    },
    primaryBtnText: {
      color: theme.palette.IMPrimary.contrastText,
      fontWeight: 600,
      fontSize: 14,
    },
    secondaryBtn: {
      height: 36,
      padding: theme.spacing(1.5, 4),
      marginRight: theme.spacing(2),
      borderWidth: 1,
      borderRadius: 5,
      borderStyle: 'solid',
      borderColor: theme.palette.IMPrimary.main,
      '&:disabled': {
        color: theme.palette.IMActions.disabled,
        borderColor: theme.palette.IMActions.disabledBackground,
      },
    },
    secondaryBtnText: {
      color: theme.palette.IMPrimary.main,
      fontWeight: 600,
      fontSize: 14,
    },
    headerPrimaryBtn: {
      height: 36,
      padding: theme.spacing(1.5, 4),
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    headerPrimaryBtnText: {
      fontSize: 14,
      fontWeight: 600,
      color: theme.palette.IMPrimary.main,
    },
    ava: {
      height: 40,
      width: 40,
    },
  }),
  { name: 'imSideSheedDrawer' },
);

export default useStyles;
