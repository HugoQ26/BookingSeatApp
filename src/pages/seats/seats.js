import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useStyles } from './seatsStyle';
import {
  selectSeats,
  ticketsQty,
  fetchSeatsAsync,
  highlightSeat,
  loadingStatus,
} from '../../features/counter/seatsSlice';

const Seats = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const seats = useSelector(selectSeats);
  const ticketsNo = useSelector(ticketsQty);
  const status = useSelector(loadingStatus);
  const markedNumber = seats.filter((seat) => seat.marked).length;

  useEffect(() => {
    dispatch(fetchSeatsAsync());
  }, []);

  // Checking selected tickets quantity with number of selected seats
  const seatsX = markedNumber < ticketsNo ? true : false;

  const onButtonClickHandler = (seat) => {
    if (seatsX || seat.marked) {
      dispatch(highlightSeat({ x: seat.cords.x, y: seat.cords.y }));
    }
  };

  const getMapedSeats = (storeSeats) => {
    return storeSeats.map((seat) => (
      <button
        key={seat.id}
        onClick={() => {
          onButtonClickHandler(seat);
        }}
        disabled={seat.reserved}
        className={`${
          seat.reserved
            ? classes.greybgnd
            : seat.marked
            ? classes.orangebgnd
            : seat.avaible
            ? classes.greenbgnd
            : classes.whitebgnd
        }`}
        style={{
          gridColumn: seat.cords.y + 1,
          gridRow: seat.cords.x + 1,
          cursor: !seat.reserved ? 'pointer' : 'not-allowed',
        }}
      >
        {seat.avaible && `Miejsca obok siebie`}
      </button>
    ));
  };

  return (
    <div className={classes.section}>
      <div className={classes.wrapper}>
        {status === 'loading' ? <div>Loading...</div> : getMapedSeats(seats)}
      </div>
      <div className={classes.footer}>
        <div className={classes.fsection}>
          <div className={classes.box}></div>
          <p>Miejsce dostępne</p>
        </div>

        <div className={classes.fsection}>
          <div className={`${classes.box} ${classes.greybgnd}`}></div>
          <p>Miejsce zarezerwowane</p>
        </div>
        <div className={classes.fsection}>
          <div className={`${classes.box} ${classes.orangebgnd}`}></div>
          <p>Twoj wybór</p>
        </div>
        <Link to="/summary" className={classes.link}>
          <button className={classes.btn} disabled={!markedNumber && true}>
            Rezerwuj
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Seats;
