const GET_GAMES = /* GraphQL */ `
  query GET_GAMES {
    getGames {
      id
      name
      rating
      price
      forSale
    }
  }
`;

export default GET_GAMES;
