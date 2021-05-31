import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
  },
});

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.wrapper}
    >
      {children}
    </Grid>
  );
};

export default MainLayout;
