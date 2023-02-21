import refs from '../refs/refs';

export const renderStarsShipsCard = allStarsShips => {
  const starsShipsList = allStarsShips
    ?.map(ship => {
      const { name, model, created, passengers, image } = ship;
      return `
      <div class='card-ship'>
      <h2>${name}</h2>
      <img class="card__image" src="${image}" alt="ship" width="400px" height="200px">
        <p>Model: ${model}</p>
        <p>Created: ${created}</p>
        <p>Passengers: ${passengers}</p>
        <button class='attack-btn'>Attack</button>
      </div>
        `;
    })
    .join('');

  refs.container.innerHTML = starsShipsList;
};
