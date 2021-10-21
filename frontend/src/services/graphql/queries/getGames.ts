const GET_GAMES = /* GraphQL */ `
  query GET_GAMES {
    getGames {
      id
      name
      rating
      price
      forSale
      platform
      cover
    }
  }
`;

export default GET_GAMES;
