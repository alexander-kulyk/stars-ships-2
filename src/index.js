import { getShips } from './API/service';
import {
  setLocalStorage,
  getLocalStorage,
  checkLocalStorage,
} from './js/localStorage/localStorage';
import { renderStarsShipsCard } from './js/markups/markup-ships';
import { getImagesShips } from './js/images-ships';
import Notiflix from 'notiflix';
import refs from './js/refs/refs';
import './index.css';

//------------get all ships----------------

const getAllStarsShips = async () => {
  try {
    const dataShips = await getShips();

    const allStarsShips = dataShips.results;

    const updatedStarsShips = getImagesShips(allStarsShips);

    setLocalStorage(updatedStarsShips);
    renderStarsShipsCard(updatedStarsShips);
  } catch (error) {
    console.log('error', error.massege);
    Notiflix.Notify.failure(`Something went wrong! Try again!`, {
      timeout: 3000,
    });
  }
};
getAllStarsShips();

//----------------------------------------------------------------
refs.container.addEventListener('click', shipMoveingInAttack);
function shipMoveingInAttack(e) {
  const btnElement = e.target;

  const checkClassElement = btnElement.classList.contains('attack-btn');
  if (checkClassElement === false) {
    return;
  }

  const shipCard = btnElement.parentNode;
  shipCard.classList.add('ship-in-flying');

  const starShip = shipCard.firstElementChild;
  const shipName = starShip.textContent;

  setTimeout(() => {
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
      refs.container.innerHTML = `<h1 class='title-no-ships'>All stars ships are in battle</h1>`;
    }
  }, 1000);
}

// const cardShip = document.querySelector('.card-ship');
// cardShip.addEventListener('click', shipMoveingInAttack);
