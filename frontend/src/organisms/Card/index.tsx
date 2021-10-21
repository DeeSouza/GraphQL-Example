import Platform from "../../molecules/Platform";
import * as S from "./styles";

const Card = () => {
  return (
    <S.Container>
      <S.Header>
        <Platform />
      </S.Header>

      <S.Details>
        <strong>FIFA 22</strong>

        <div className="info">
          <div className="price">
            <span>$</span> 10
          </div>
          <div className="rating">5/10</div>

          <button type="button">Buy</button>
        </div>
      </S.Details>
    </S.Container>
  );
};

export default Card;
