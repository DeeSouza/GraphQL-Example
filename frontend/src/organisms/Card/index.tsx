import { FaStar } from "react-icons/fa";

import Platform from "molecules/Platform";
import { Game } from "pages/Main/types";

import * as S from "./styles";

const Card = ({ name, platform, rating, cover }: Game) => {
  return (
    <S.Container>
      <S.Header cover={cover}>
        <Platform platform={platform} />
      </S.Header>

      <S.Details>
        <strong>{name}</strong>

        <div className="info">
          <div className="info-detail">
            <FaStar color="#0084ff" size={18} />
            <span>{rating}/10</span>
          </div>
        </div>
      </S.Details>
    </S.Container>
  );
};

export default Card;
