import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { selectSeats } from '../../features/counter/seatsSlice';

export const useStyles = makeStyles({
  wrapper: {
    alignSelf: 'start',
  },
});

const Summary = () => {
  const classes = useStyles();
  const reservedSeats = useSelector(selectSeats).filter((seat) => seat.marked);

  return (
    <div className={classes.wrapper}>
      <h2>Twoja rezerwacja przebiegła pomyślnie</h2>
      <h3>Wybrałeś {reservedSeats.length} miejsc/a:</h3>
      {reservedSeats.map((seat) => {
        return (
          <p key={seat.id}>
            - rząd {seat.cords.x + 1}, miejsce {seat.cords.y + 1} ({seat.id})
          </p>
        );
      })}
      <h2>
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji
      </h2>
    </div>
  );
};

export default Summary;
