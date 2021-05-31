import axios from 'axios';

const fetchSeats = async () => {
  const data = await axios.get(`http://localhost:3004/seats`);
  return data;
};

export default fetchSeats;
