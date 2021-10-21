import { IconBaseProps } from "react-icons";
import { FaXbox, FaPlaystation, FaLaptop } from "react-icons/fa";
import * as S from "./styles";

type Platform = {
  [key: string]: {
    name: string;
    icon: IconBaseProps;
    color: string;
  };
};

type Props = { platform: string };

const platforms: Platform = {
  PC: {
    name: "PC",
    icon: <FaLaptop />,
    color: "#060606",
  },
  XBOX: {
    name: "Xbox Series X",
    icon: <FaXbox />,
    color: "#107911",
  },
  PLAYSTATION: {
    name: "Playstation 5",
    icon: <FaPlaystation />,
    color: "#01429C",
  },
};

const Platform = ({ platform }: Props) => {
  const { icon, name, color } = platforms[platform];
  return (
    <S.Container color={color}>
      {icon}
      <span>{name}</span>
    </S.Container>
  );
};

export default Platform;
