import Game from "./schemas/Game";
import GameComment from "./schemas/GameComment";

export default {
  Query: {
    getGames: () => Game.find().populate("comments"),
    getGame: async (_, { id }) => Game.findById(id).populate("comments"),
  },

  Mutation: {
    createGame: (_, { game }) => Game.create(game),
    addCommentGame: async (_, { comment }) => {
      const commentGame = await GameComment.create(comment);
      const gameById = await Game.findById(comment.game);

      gameById.comments.push(commentGame);
      gameById.save();

      return commentGame;
    },
  },
};
