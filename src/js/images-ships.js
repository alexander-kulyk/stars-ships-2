export const arrImgs = [
  'https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024',
  'https://www.denofgeek.com/wp-content/uploads/2016/01/tie-fighter.jpeg',
  'https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg',
  'https://www.denofgeek.com/wp-content/uploads/2016/01/super-star-destroyer_0.jpg',
  'https://www.denofgeek.com/wp-content/uploads/2019/02/star-wars-y-wing.jpeg',
  'https://www.denofgeek.com/wp-content/uploads/2019/02/star-wars-b-wing.jpg',
  'https://www.denofgeek.com/wp-content/uploads/2019/02/snoke-supremacy-flagship.jpeg',
  'https://www.denofgeek.com/wp-content/uploads/2019/02/star-wars-rebels-ghost.png',
  'https://www.denofgeek.com/wp-content/uploads/2019/12/star-wars-jedi-starfighter.jpg?w=1024',
  'https://www.denofgeek.com/wp-content/uploads/2020/06/star-wars-outrider.jpg?fit=1024%2C552',
];

export const addImagesToShips = allStarsShips => {
  return allStarsShips.map((ship, idx) => {
    return { ...ship, image: arrImgs[idx] };
  });

  //   for (let i = 0; i < allStarsShips.length; i++) {
  //     allStarsShips[i].image = arrImgs[i];
  //   }
  //   return allStarsShips;
};
