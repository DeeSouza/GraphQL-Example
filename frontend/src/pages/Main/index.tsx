import { useEffect, useState } from "react";

import Card from "organisms/Card";
import client from "services/graphql/client";

import GET_GAMES from "services/graphql/queries/getGames";

import * as S from "./styles";
import { GamesProps, Game } from "./types";

const Main = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => {
      const { getGames } = await client.request<GamesProps>(GET_GAMES);
      setGames(getGames);
    })();
  }, []);

  return (
    <S.Container>
      {games.map((game) => (
        <Card key={game.id} {...game} />
      ))}
    </S.Container>
  );
};

export default Main;
