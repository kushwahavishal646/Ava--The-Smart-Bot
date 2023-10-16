import makeStyles from '@mui/styles/makeStyles';
import theme from '../../../../config/theme';

const useStyles = makeStyles(
  () => ({
    container: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#1F1F1F',
    },
    contentArea: {
      backgroundColor: '#262626',
    },
    headerContainer: {
      height: 64,
      display: 'flex',
      backgroundColor: '#262626',
    },
    headerTitle: {
      color: '#FFFFFF',
      fontWeight: 700,
    },
    inputContainer: {
      position: 'absolute',
      width: '28vw',
      bottom: 2,
      // backgroundColor: '#363636',
    },
    chatMessageContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      maxHeight: '86.9vh',
      overflowY: 'scroll',
      scroll: 'auto',
    },
    assistantMessage: {
      display: 'flex',
      width: '252px',
      padding: '8px 12px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '10px',
      borderRadius: '12px',
      backgroundColor: '#383838',
      alignSelf: 'flex-start',
      margin: theme.spacing(2.5),
    },
    userMessage: {
      display: 'flex',
      width: '252px',
      padding: '8px 12px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '10px',
      borderRadius: '12px',
      backgroundColor: '#533BA0',
      margin: theme.spacing(2.5),
      alignSelf: 'flex-end',
    },
    messageLabel: {
      color: '#FFFFFF',
    },
  }),
  { name: 'network', index: 2 },
);
export default useStyles;
