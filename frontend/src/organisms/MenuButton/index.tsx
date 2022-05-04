import { useMenu } from "contexts/MainContext";
import { FaGamepad } from "react-icons/fa";
import { Button } from "./styles";

const MenuButton = () => {
  const { handleToggleMenu } = useMenu();

  return (
    <Button onClick={handleToggleMenu}>
      <FaGamepad size={32} color="#ff6347" />
    </Button>
  );
};

export default MenuButton;
