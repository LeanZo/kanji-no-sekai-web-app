import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => {
  const theme = useTheme();

  return {
    logo: {
      height: 40,
      marginRight: theme.spacing(1),
    },
    menuButton: {
      marginRight: theme.spacing(3),
    },
    button: {
      marginLeft: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  };
});