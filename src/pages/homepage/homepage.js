import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useStyles } from './homepageStyle';
import {
  ticketsQty,
  SeatNextTo,
  changeSeatNextTo,
  changeTickets,
} from '../../features/counter/seatsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const storeTickets = useSelector(ticketsQty);
  const storeNextTo = useSelector(SeatNextTo);
  const classes = useStyles();

  return (
    <form>
      <div className={classes.container}>
        <p>Liczba miejsc</p>
        <input
          min={1}
          type="number"
          value={storeTickets}
          onChange={(e) => {
            dispatch(changeTickets(e.target.value));
          }}
        />
        <label>
          <input
            type="checkbox"
            checked={storeNextTo}
            onChange={() => {
              dispatch(changeSeatNextTo());
            }}
          />
          Czy miejsca mają być obok siebie ?
        </label>

        <Link to="/seats" className={classes.link}>
          <button className={classes.btn}>Wybierz miejsca</button>
        </Link>
      </div>
    </form>
  );
};

export default HomePage;
