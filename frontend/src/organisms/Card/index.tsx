import Platform from "molecules/Platform";
import { Game } from "pages/Main/types";
import * as S from "./styles";

const Card = ({ name, forSale, price, rating }: Game) => {
  return (
    <S.Container>
      <S.Header>
        <Platform />
      </S.Header>

      <S.Details>
        <strong>{name}</strong>

        <div className="info">
          <div className="price">
            <span>$</span> {price}
          </div>
          <div className="rating">{rating}/10</div>

          <button disabled={forSale} type="button">
            Buy
          </button>
        </div>
      </S.Details>
    </S.Container>
  );
};

export default Card;
