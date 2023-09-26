import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => {
  const theme = useTheme();

  return {
    widget: {
      width: '540px',
      height: '450px',
      margin: '0 auto',
    },
    list: {
      backgroundColor: theme.palette.background.paper,
      '& > li:nth-of-type(odd)': {
        backgroundColor: theme.palette.grey[100],
      },
      '& > li:nth-of-type(even)': {
        backgroundColor: theme.palette.grey[200],
      },
      maxWidth: 800,
      margin: '0 auto !important',
    },
    searchInput: {
      padding: '0 10px !important',
      margin: '0 auto',
      maxWidth: 800,
    }
  };
});