import React, { useState } from 'react';
import { TextField, List, ListItem, InputAdornment, IconButton, CircularProgress, LinearProgress, Alert, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Search } from '@mui/icons-material';
import JishoEntry from '../JishoEntry';
import { useStyles } from './styles';

export type JishoSearchResponse = {
  slug: string;
  is_common: boolean;
  tags: string[];
  jlpt: string[];
  japanese: {
    word: string;
    reading: string;
  }[];
  senses: {
    english_definitions: string[];
    parts_of_speech: string[];
    links: {
      text: string;
      url: string;
    }[];
    tags: string[];
    restrictions: string[];
    see_also: string[];
    antonyms: string[];
    source: string[];
    info: string[];
    sentences?: {
      japanese: string;
      english: string;
    }[];
  }[];
  attribution: {
    jmdict: boolean;
    jmnedict: boolean;
    dbpedia: string;
  };
};

const JishoSearch = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [searchText, setSearchText] = useState('');
  const isSM = useMediaQuery(theme.breakpoints.down('sm'));
  
  const isDev = process.env.NODE_ENV === 'development';
  const baseUrl = isDev ? 'https://cors-anywhere.herokuapp.com/https://jisho.org/api/v1' : 'https://jisho.org/api/v1';
  const { data, isFetching, isError, refetch, isFetched } = useQuery<JishoSearchResponse[]>(['jishoSearch'], async () => {
    const response = await fetch(`{baseUrl}/search/words?keyword=${searchText}`, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    const json = await response.json();
    return json.data;
  }, {
    refetchOnWindowFocus: false,
    enabled: false,
    retry: 1,
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value.trim());
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  const handleSearch = () => {
    if (!isFetching && searchText)
      refetch();
  };

  return (
    <div>
      
      {!isFetched && (
        <div className={classes.welcome}>
          <Typography variant={isSM ? 'h4' : 'h3'}>Welcome to 漢字の世界</Typography>
          <Typography variant={isSM ? 'h6' : 'h5'}>Type a japanese word to find its meaning</Typography>
        </div>
      )}
      <div className={classes.searchInput}>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          value={searchText}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <List className={classes.list}>
        {isFetching && <LinearProgress />}
        {isError && <Alert severity="error">There was an error, please try again later.</Alert>}
        {data && data.map((entry) => (
          <ListItem key={entry.slug}>
            <JishoEntry entry={entry} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default JishoSearch;
