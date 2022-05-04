import GetGamesService from "./games/GetGamesService";
import Game from "./schemas/Game";

export default {
  Query: {
    getGames: () => {
      const gamesService = new GetGamesService();
      console.log(gamesService);

      return gamesService.execute();
    },
    getGame: (_, { id }) => Game.findById(id),
  },
};
