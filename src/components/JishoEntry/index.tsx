import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { JishoSearchResponse } from '../JishoSearch';
import { useStyles } from './styles';


const JishoEntry = (props: { entry: JishoSearchResponse }) => {
  const { entry } = props;

  const classes = useStyles();
  
  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        <Typography variant="subtitle1">{entry.japanese[0].reading}</Typography>
        <Typography variant="h4">{entry.japanese[0].word}</Typography>
      </Grid>
      <Grid item xs={12} sm={9}>
        <List>
          {entry.senses.map((sense, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${index + 1}. ${sense.english_definitions.join(', ')}`} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default JishoEntry;
