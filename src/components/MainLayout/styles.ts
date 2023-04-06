import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => {
  const theme = useTheme();

  return {
    root: {
      flexGrow: 1,
    },
    content: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      textAlign: 'center',
    },
  };
});