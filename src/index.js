import { getShips } from './API/service';
import {
  setLocalStorage,
  getLocalStorage,
  checkLocalStorage,
} from './js/localStorage/localStorage';
import { renderStarsShipsCard } from './js/markups/markup-ships';
import Notiflix from 'notiflix';
import refs from './js/refs/refs';

import './index.css';

const getAllStarsShips = async () => {
  try {
    const dataShips = await getShips();

    const allStarsShips = dataShips.results;
    setLocalStorage(allStarsShips);
    renderStarsShipsCard(allStarsShips);

    // const cardShip = document.querySelector('.card-ship');
    // cardShip.addEventListener('click', shipMoveingInAttack);
  } catch (error) {}
};
getAllStarsShips();

refs.container.addEventListener('click', shipMoveingInAttack);
function shipMoveingInAttack(e) {
  const btnElement = e.target;
  //shipCard.classList.add('ship-in-flying');

  const checkClassElement = btnElement.classList.contains('attack-btn');
  if (checkClassElement === false) {
    return;
  }
  const shipCard = btnElement.parentNode;
  const starShip = shipCard.firstElementChild;
  const shipName = starShip.textContent;

  const starsShipsList = getLocalStorage();
  const newStarsShipList = starsShipsList.filter(ship => {
    if (ship.name === shipName) {
      return;
    }
    return [].push(ship);
  });

  renderStarsShipsCard(newStarsShipList);
  setLocalStorage(newStarsShipList);

  if (getLocalStorage().length === 0) {
    refs.container.innerHTML = `<p>All starships are in battle</p>`;
  }

  //   setTimeout(() => {
  //     const starShip = shipCard.firstElementChild;
  //     const shipName = starShip.textContent;

  //     const starsShipsList = getLocalStorage();

  //     const newStarsShipList = starsShipsList.filter(ship => {
  //       if (ship.name === shipName) {
  //         return;
  //       }
  //       return [].push(ship);
  //     });

  //     renderStarsShipsCard(newStarsShipList);
  //     setLocalStorage(newStarsShipList);
  //   }, 1000);
}
