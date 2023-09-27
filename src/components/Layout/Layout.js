import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
// import {} from './Layout.styled';

import { Container } from '../../styles/Container';

const Layout = () => {
  return (
    <Container>
      <main>
        <Suspense fallback={<Loader />}>
          <Header />
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
