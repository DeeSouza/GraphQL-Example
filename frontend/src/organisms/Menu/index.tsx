import { useMenu } from "contexts/MainContext";
import { NavMenu } from "./styles";

const Menu = () => {
  const { showMenu } = useMenu();

  return (
    <NavMenu show={showMenu}>
      <ul>
        <li>Playstation</li>
        <li>Xbox</li>
        <li>Nintendo Switch</li>
        <li>PC</li>
      </ul>
    </NavMenu>
  );
};

export default Menu;
