import MenuButton from "organisms/MenuButton";
import { Container } from "./styles";

const Header = () => (
  <Container>
    <div className="wrapper">
      <strong>Play the Game</strong>

      <MenuButton />
    </div>
  </Container>
);

export default Header;
