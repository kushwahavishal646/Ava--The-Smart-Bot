import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#1F1F1F',
      overflowY: 'hidden',
    },
    offlineMain: {
      height: 'calc(100vh - 100px)',
      marginTop: 100,
    },
    labelValueContainer: {
      height: 62,
      flexDirection: 'column-reverse',
      justifyContent: 'center',
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: '22px',
      cursor: 'pointer',
    },
    headerContainer: {
      height: 64,
      position: 'relative',
      zIndex: 1301,
      backgroundColor: '#1F1F1F',
    },
    headerIconContainer: {
      display: 'flex',
    },
    headerIcon: {
      width: '40px',
      height: '40px',
    },
  }),
  { name: 'psnLayout', index: 1 },
);

export default useStyles;
