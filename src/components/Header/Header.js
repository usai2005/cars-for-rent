import { HeaderBox, List, Link } from './Header.styled';

const Header = () => {
  return (
    <HeaderBox>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/carsCatalog">Catalog</Link>
        </li>
        <li>
          <Link to="/favoriteCars">Favorite</Link>
        </li>
      </List>
    </HeaderBox>
  );
};

export default Header;
