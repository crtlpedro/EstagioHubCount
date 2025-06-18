import { useUser } from "../../components/Wrapper";
import FavoriteSection from "./favoritesection/FavoriteSection";
import "./Header.css"

const Header = () => {
  const { name } = useUser();

  return (
    <>
  <h1 className="welcome-user">Bem-vindo, {name}!</h1>
  <FavoriteSection/>
  </>
  );
};

export default Header;