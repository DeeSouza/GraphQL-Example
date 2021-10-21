import { FaXbox, FaPlaystation, FaLaptop } from "react-icons/fa";
import * as S from "./styles";

const platforms = {
  pc: <FaLaptop />,
  xbox: <FaXbox />,
  playstation: <FaPlaystation />,
};

const Platform = () => {
  return (
    <S.Container>
      {platforms.xbox}
      <span>Xbox Series S</span>
    </S.Container>
  );
};

export default Platform;
