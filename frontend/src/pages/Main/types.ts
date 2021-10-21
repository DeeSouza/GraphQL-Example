export type Game = {
  id: string;
  name: string;
  rating: number | null;
  price: number;
  platform: string;
  forSale: boolean;
  cover: string;
};

export type GamesProps = {
  getGames: Game[];
};
