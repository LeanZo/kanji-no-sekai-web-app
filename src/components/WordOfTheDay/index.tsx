import React, { useState } from 'react';
import { TextField, List, ListItem, InputAdornment, IconButton, CircularProgress, LinearProgress, Alert, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Search } from '@mui/icons-material';
import JishoEntry from '../JishoEntry';
import { useStyles } from './styles';

const WordOfTheDay = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div id="widget" className={classes.widget}>
        <iframe src="https://www.innovativelanguage.com/widgets/wotd/embed.php?language=Japanese&type=large&bg=%230000FF&content=%23fff&header=%23204473&highlight=%23000000&opacity=.20&scrollbg=%23204473&sound=%232694bf&text=%231FE3FF&quiz=N" width="540" height="450" scrolling="no"></iframe>
      </div>
    </>
  );
};

export default WordOfTheDay;
