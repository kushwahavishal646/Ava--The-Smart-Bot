import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    offlineDrawer: {
      marginBottom: theme.spacing(5.5),
    },
    drawer: {
      width: 'fit-content',
      flexShrink: 0,
      padding: theme.spacing(7, 4, 8, 4),
    },
    drawerOpen: {
      width: 'fit-content',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      width: theme.spacing(20),
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    drawerPaper: {
      width: 'fit-content',
      flexShrink: 0,
      padding: theme.spacing(7, 4, 8, 4),
    },
    drawerOpenPaper: {
      width: 'fit-content',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClosePaper: {
      width: 'fit-content',
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    list: {
      marginTop: theme.spacing(7),
    },
    listItem: {
      width: 48,
      height: 48,
      maxHeight: 48,
      borderRadius: 12,
      justifyContent: 'center',
      marginTop: theme.spacing(2),
    },
    listItemExpand: {
      width: 180,
    },
    listItemSelectedBackground: {
      backgroundColor: theme.palette.IMInfo.main,
      color: theme.palette.IMPrimary.main,
      '&:hover': {
        backgroundColor: theme.palette.IMInfo.main,
      },
    },
    listItemIcon: {
      justifyContent: 'center',
      '&:hover': {
        color: theme.palette.grey.A700,
      },
    },
    selectedListItemIcon: {
      justifyContent: 'center',
      color: theme.palette.IMPrimary.contrastText,
      '&:hover': {
        color: theme.palette.IMPrimary.contrastText,
      },
    },
    listItemText: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '22px',
    },
    selectedListItemText: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '22px',
      color: theme.palette.IMPrimary.contrastText,
    },
  }),
  { name: 'navigationDrawer', index: 1 },
);

export default useStyles;
