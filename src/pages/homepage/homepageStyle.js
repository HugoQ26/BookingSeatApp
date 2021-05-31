import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    '& label': {
      gridColumn: '1 / span 2',
    },
    '& p': {
      margin: 0,
    },
    padding: `10px`,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    rowGap: '35px',
    width: '290px',
  },
  btn: {
    width: '100%',
    padding: '15px 0',
  },
  link: {
    gridColumn: '1 / span 2',
    width: '100%',
  },
});
