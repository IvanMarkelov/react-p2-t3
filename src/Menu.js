import React from 'react';
import './App.css';
import { AppBar, Button, Box, Container, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}))

function Menu() {
  const classes = useStyles;
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit"
          aria-label="menu" className={classes.menuButton}>
            <MenuIcon/>
          </IconButton>
          <Typography className={classes.title} variant="h6">Well made menu</Typography>
          <Box ml={10} mr={3}>
            <Button color="inherit" variant="outlined">Press it</Button>
          </Box>
          <Button color="secondary" variant="contained" >Don't Press it</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Menu;
