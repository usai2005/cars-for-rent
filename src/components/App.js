import { Route, Routes } from 'react-router-dom';
// import Loader from './Loader/Loader';

import HomePage from '../pages/HomePage/HomePage';
import CarsCatalog from '../pages/CarsCatalog/CarsCatalog';
import FavoriteCars from '../pages/FavoriteCars/FavoriteCars';
import Layout from './Layout/Layout';

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
