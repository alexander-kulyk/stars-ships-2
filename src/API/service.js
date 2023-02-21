import axios from 'axios';
import Notiflix from 'notiflix';

const URL = 'https://swapi.dev/api/starships/';

export const getShips = async () => {
  try {
    const responce = await axios.get(URL);

    return responce.data;
  } catch (error) {
    console.log('error', error.message);
    Notiflix.Notify.failure(`Something went wrong! Try again!`, {
      timeout: 3000,
    });
  }
};
