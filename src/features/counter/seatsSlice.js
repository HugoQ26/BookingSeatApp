import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchSeats from './seatsAPI';

const initialState = {
  status: 'loading',
  ticketQty: 1,
  seatNextTo: false,
  seats: [],
};

export const fetchSeatsAsync = createAsyncThunk('fetchSeats', async () => {
  const response = await fetchSeats();
  return response.data;
});

export const seatsReducer = createSlice({
  name: 'seatsReducer',
  initialState,
  reducers: {
    changeTickets: (state, { payload }) => {
      if (state.seatNextTo) {
        const result = payload > 5 ? state : (state.ticketQty = payload);
      } else {
        state.ticketQty = payload;
      }
    },
    changeSeatNextTo: (state, { payload }) => {
      if (state.ticketQty > 5 && !state.seatNextTo) {
        state.ticketQty = 5;
      }
      state.seatNextTo = !state.seatNextTo;
    },

    highlightSeat: (state, { payload }) => {
      state.seats.forEach((seat) => {
        if (seat.cords.x === payload.x && seat.cords.y === payload.y) {
          if (!seat.marked) {
            seat.marked = true;
          } else {
            seat.marked = !seat.marked;
          }
        }
      });
    },
  },
  extraReducers: {
    [fetchSeatsAsync.fulfilled]: (state, action) => {
      state.seats = [...action.payload];
      state.status = 'idle';
    },
    [fetchSeatsAsync.pending]: (state, action) => {
      state.status = 'loading';
    },
  },
});

export const { changeTickets, changeSeatNextTo, bookASeat, highlightSeat } =
  seatsReducer.actions;

export const selectSeats = (state) => {
  const free = state.seatsStore.seats.filter((seat) => !seat.reserved);
  const reserved = state.seatsStore.seats.filter((seat) => seat.reserved);
  const ticketsQty = +state.seatsStore.ticketQty;

  if (state.seatsStore.seatNextTo) {
    for (let i = 0; i < free.length; i++) {
      if (
        free[i + ticketsQty - 1] &&
        free[i + ticketsQty - 1].cords.y - free[i].cords.y === ticketsQty - 1
      ) {
        for (let j = 0; j < ticketsQty; j++) {
          free[i + j] = { ...free[i + j], avaible: 'true' };
        }
      }
    }

    return [...free, ...reserved];
  } else {
    return state.seatsStore.seats;
  }
};
export const ticketsQty = (state) => state.seatsStore.ticketQty;
export const SeatNextTo = (state) => state.seatsStore.seatNextTo;
export const loadingStatus = (state) => state.seatsStore.status;

export default seatsReducer.reducer;
