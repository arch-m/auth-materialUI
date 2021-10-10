import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';

export const AuthHeader = () => {
  return (
    <Box sx={{flexGrow: 1, background: 'purple'}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Login
          </Typography>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

