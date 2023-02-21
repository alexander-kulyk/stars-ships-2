const KEY_STARS_SHIPS = 'stars_ships';

export const setLocalStorage = ships => {
  const arrOfShips = JSON.stringify(ships);
  window.localStorage.setItem(KEY_STARS_SHIPS, arrOfShips);
};

export const getLocalStorage = () => {
  const shipsFromLocalStorage = window.localStorage.getItem(KEY_STARS_SHIPS);
  const arrOfShips = JSON.parse(shipsFromLocalStorage);
  return arrOfShips;
};

export const checkLocalStorage = () => {
  const localStorage = window.localStorage.getItem(KEY_STARS_SHIPS);
  if (localStorage === null) {
    setLocalStorage([]);
  }
  return;
};
