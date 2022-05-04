export type Game = {
  id: string;
  name: string;
  rating: number | null;
  platform: string;
  cover: string;
};

export type GamesProps = {
  getGames: Game[];
};
