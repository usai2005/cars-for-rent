import { useState, useEffect } from 'react';
import SingleCar from '../../components/SingleCar/SingleCar';
import { List } from './FavoriteCars.styled';

// import DescriptionModal from "../../components/DescriptionModal/DescriptionModal";

const FavoriteCars = () => {
  const [chosenFavoriteCars, setChosenFavoriteCars] = useState(() => {
    return JSON.parse(window.localStorage.getItem('favoriteCars')) ?? '';
  });
  // const [showDescriptionModal, setShowDescriptionModal] = useState(false);

  useEffect(() => {
    const prevChosenCars = localStorage.getItem('favoriteCars');

    if (prevChosenCars !== chosenFavoriteCars) {
      localStorage.setItem('favoriteCars', JSON.stringify(chosenFavoriteCars));
    }
  }, [chosenFavoriteCars]);

  const handleFavoriteBtnClick = ({ car }) => {
    const indexToRemove = chosenFavoriteCars.indexOf(car);

    const updatedFavoriteCars = [...chosenFavoriteCars];

    updatedFavoriteCars.splice(indexToRemove, 1);

    return setChosenFavoriteCars(updatedFavoriteCars);
  };

  return (
    <List>
      {chosenFavoriteCars.map(car => (
        <SingleCar
          key={car.id}
          car={car}
          handleFavoriteBtnClick={handleFavoriteBtnClick}
          chosenFavoriteCars={chosenFavoriteCars}
        />
      ))}
    </List>
  );
};

export default FavoriteCars;
