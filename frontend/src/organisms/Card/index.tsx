import { FaShoppingCart, FaStar } from "react-icons/fa";

import Platform from "molecules/Platform";
import { Game } from "pages/Main/types";
import * as S from "./styles";

const Card = ({ name, forSale, platform, price, rating, cover }: Game) => {
  return (
    <S.Container>
      <S.Header cover={cover}>
        <Platform platform={platform} />
      </S.Header>

      <S.Details>
        <strong>{name}</strong>

        <div className="info">
          <div className="price">
            <span>$</span> {price}
          </div>

          <div className="rating">
            <FaStar color="#FFFF00" size={18} />
            <span>{rating}/10</span>
          </div>

          <button disabled={forSale} type="button">
            <FaShoppingCart color="#FFFFFF" size={18} />
          </button>
        </div>
      </S.Details>
    </S.Container>
  );
};

export default Card;
