import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  section: {
    display: 'grid',
    justifyItems: 'center',
  },
  wrapper: {
    display: 'grid',
    gridGap: '10px',
    gridAutoRows: '60px',
    gridAutoColumns: '60px',
  },
  footer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridAutoRows: '60px',
    justifyItems: 'center',
    margin: '50px',
  },
  box: {
    width: '60px',
    height: '60px',
    border: '1px solid black',
  },
  fsection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr ',
    justifyItems: 'center',
    alignContent: 'center',
  },
  btn: {
    width: '100%',
    height: '100%',
  },
  link: {
    width: '100%',
  },
  whitebgnd: {
    backgroundColor: '#fff',
  },
  orangebgnd: {
    backgroundColor: '#FF8A05',
  },
  greybgnd: {
    backgroundColor: '#474747',
  },
  greenbgnd: {
    backgroundColor: 'green',
  },
});
