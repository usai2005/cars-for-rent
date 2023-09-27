import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './Layout/Layout';

// import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CarsCatalog = lazy(() => import('../pages/CarsCatalog/CarsCatalog'));
const FavoriteCars = lazy(() => import('../pages/FavoriteCars/FavoriteCars'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="carsCatalog" element={<CarsCatalog />} />
        <Route path="favoriteCars" element={<FavoriteCars />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
