export type Game = {
  id: string;
  name: string;
  rating: number | null;
  price: number;
  forSale: boolean;
};

export type GamesProps = {
  getGames: Game[];
};
