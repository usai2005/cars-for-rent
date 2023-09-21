import Header from "../Header/Header";
import {} from "./Layout.styled";
import { Outlet } from "react-router-dom";
import { Container } from "../../styles/Container";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
