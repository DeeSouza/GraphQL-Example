import { useEffect, useState, useRef } from "react";

import { useMenu } from "contexts/MainContext";

import Card from "organisms/Card";

import client from "services/graphql/client";
import GET_GAMES from "services/graphql/queries/getGames";

import { GamesProps, Game } from "./types";

import * as S from "./styles";

const Main = () => {
  const { showMenu } = useMenu();
  const refContainer = useRef<HTMLDivElement>(null);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => {
      const { getGames } = await client.request<GamesProps>(GET_GAMES);
      setGames(getGames);
    })();
  }, []);

  useEffect(() => {
    const overflow = showMenu ? "hidden" : "auto";

    if (refContainer.current && refContainer.current.parentElement) {
      refContainer.current.parentElement.style.overflow = overflow;
    }
  }, [showMenu]);

  return (
    <S.Container show={showMenu} ref={refContainer}>
      {games.map((game) => (
        <Card key={game.id} {...game} />
      ))}
    </S.Container>
  );
};

export default Main;
