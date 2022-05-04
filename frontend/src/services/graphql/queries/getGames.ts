const GET_GAMES = /* GraphQL */ `
  query GET_GAMES {
    getGames {
      id
      name
      rating
      platform
      cover
    }
  }
`;

export default GET_GAMES;
