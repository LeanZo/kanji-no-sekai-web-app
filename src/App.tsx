import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()
  const theme = createTheme();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MainLayout />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
