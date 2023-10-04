import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import SingleCar from '../../components/SingleCar/SingleCar';
import { List, LoadMoreBtn, ButtonContainer } from './CarsCatalog.styled';
import DescriptionModal from '../../components/DescriptionModal/DescriptionModal';

const CarsCatalog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [chosenFavoriteCars, setChosenFavoriteCars] = useState(() => {
    return JSON.parse(window.localStorage.getItem('favoriteCars')) ?? '';
  });

  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const [carForDescriptionModal, setCarForDescriptionModal] = useState({});
  const [isLoadMoreBtnShown, setIsLoadMoreBtnShown] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCars = async () => {
      try {
        const { data } = await axios.get(
          'https://6505984fef808d3c66f036e9.mockapi.io/advert',
          {
            params: {
              page: `${page}`,
              limit: 8,
            },
          }
        );
        data.length < 8
          ? setIsLoadMoreBtnShown(false)
          : setIsLoadMoreBtnShown(true);
        setCars(data);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        setIsLoading(false);
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };
    fetchCars();
  }, [page]);

  useEffect(() => {
    const prevChosenCars = localStorage.getItem('favoriteCars');

    if (prevChosenCars !== JSON.stringify(chosenFavoriteCars)) {
      localStorage.setItem('favoriteCars', JSON.stringify(chosenFavoriteCars));
    }
  }, [chosenFavoriteCars]);

  const handleFavoriteBtnClick = ({ car }) => {
    if (chosenFavoriteCars.length === 0) {
      return setChosenFavoriteCars([car]);
    } else {
      const indexToRemove = chosenFavoriteCars.findIndex(
        chosenCar => chosenCar.id === car.id
      );

      if (indexToRemove === -1) {
        setChosenFavoriteCars([...chosenFavoriteCars, car]);
      } else {
        const updatedFavoriteCars = [...chosenFavoriteCars];

        updatedFavoriteCars.splice(indexToRemove, 1);
        setChosenFavoriteCars(updatedFavoriteCars);
      }
    }
  };

  const onOpenDescriptionModal = ({ car }) => {
    setShowDescriptionModal(true);
    setCarForDescriptionModal(car);
  };

  const onLoadMoreBtnClick = () => {
    setPage(page + 1);
  };

  const onCloseDescriptionModal = () => {
    setShowDescriptionModal(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <List>
        {cars.map(car => (
          <SingleCar
            key={car.id}
            car={car}
            handleFavoriteBtnClick={handleFavoriteBtnClick}
            chosenFavoriteCars={chosenFavoriteCars}
            openDescriptionModal={onOpenDescriptionModal}
          />
        ))}
        {showDescriptionModal && (
          <DescriptionModal
            closeDescriptionModal={onCloseDescriptionModal}
            car={carForDescriptionModal}
          />
        )}
      </List>
      <ButtonContainer>
        {isLoadMoreBtnShown && (
          <LoadMoreBtn onClick={onLoadMoreBtnClick} type="button">
            Load more
          </LoadMoreBtn>
        )}
      </ButtonContainer>
    </>
  );
};

export default CarsCatalog;
