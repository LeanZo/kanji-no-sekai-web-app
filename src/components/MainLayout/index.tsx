import React from 'react';
import { Typography, Grid } from '@mui/material';
import MainTopBar from '../MainTopBar';
import { useStyles } from './styles';
import JishoSearch from '../JishoSearch';
import WordOfTheDay from '../WordOfTheDay';

function MainLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainTopBar />
      <Grid container justifyContent="center" alignItems="center" className={classes.content}>
        <Grid item xs={12}>
          <JishoSearch />
          <WordOfTheDay />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainLayout;
