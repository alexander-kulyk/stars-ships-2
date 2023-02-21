import refs from '../refs/refs';
const img =
  'https://www.gamersdecide.com/sites/default/files/styles/news_images/public/top_5_star_citizen_best_all_around_ships-1.jpg';

export const renderStarsShipsCard = allStarsShips => {
  const starsShipsList = allStarsShips
    ?.map(ship => {
      const { name, model, created, passengers } = ship;
      return `
      <div class='card-ship'>
      <h2>${name}</h2>
      <img class="card__image" src="${img}" alt="ship" width="400px" height="200px">
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

//<img src="${svg}" alt="flag ${official}" width='100px'></img>
