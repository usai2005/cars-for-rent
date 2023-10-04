import { useState, useEffect } from 'react';
import {
  Card,
  ImgThumb,
  ModelYearPrice,
  Characteristics,
  FirstCharacteristicsLine,
  SecondCharacteristicsLine,
  LearnMoreBtn,
  FavoriteBtn,
  FavoriteIcon,
} from './SingleCar.styled';

import icons from '../../images/icons.svg';
import getPicture from '../GetPictureFoo';

const SingleCar = ({
  car,
  handleFavoriteBtnClick,
  chosenFavoriteCars,
  openDescriptionModal,
}) => {
  const {
    address,
    id,
    img,
    photoLink,
    make,
    mileage,
    model,
    rentalCompany,
    rentalPrice,
    type,
    year,
  } = car;

  const [isThisCarFavorite, setIsThisCarFavorite] = useState(false);

  useEffect(() => {
    chosenFavoriteCars &&
      setIsThisCarFavorite(
        chosenFavoriteCars.some(chosenCar => chosenCar.id === id)
      );
  }, [id, chosenFavoriteCars]);

  // console.log(isFavoriteCar);

  const picture = getPicture(img, photoLink);

  const addressArr = address.split(', ');

  const iconBorderColor = isThisCarFavorite ? '#3470FF' : '#FFFFFF';

  const iconColor = isThisCarFavorite ? '#3470FF' : 'none';

  return (
    <Card>
      <ImgThumb>
        <img src={picture} alt={`${make} ${model} `} />
      </ImgThumb>
      <ModelYearPrice>
        <div>
          <h2>
            {make} <span>{model}</span>, {year}
          </h2>
        </div>
        <p>{rentalPrice}</p>
      </ModelYearPrice>
      <Characteristics>
        <li>
          <FirstCharacteristicsLine>
            <li>
              <p>{addressArr[1]}</p>
            </li>
            <li>
              <p>{addressArr[2]}</p>
            </li>
            <li>
              <p>{rentalCompany}</p>
            </li>
            <li>
              <p>Accessories</p>
            </li>
          </FirstCharacteristicsLine>
        </li>
        <li>
          <SecondCharacteristicsLine>
            <li>
              <p>{type}</p>
            </li>
            <li>
              <p>{model}</p>
            </li>
            <li>
              <p>{mileage.toLocaleString('en-IN')}</p>
            </li>
            <li>
              <p>Functions</p>
            </li>
          </SecondCharacteristicsLine>
        </li>
      </Characteristics>

      <FavoriteBtn
        type="button"
        onClick={() => {
          handleFavoriteBtnClick({ car });
        }}
      >
        <FavoriteIcon style={{ stroke: iconBorderColor, fill: iconColor }}>
          <use href={icons + '#icon-heart'}></use>
        </FavoriteIcon>
      </FavoriteBtn>

      <LearnMoreBtn type="button" onClick={() => openDescriptionModal({ car })}>
        Learn more
      </LearnMoreBtn>
    </Card>
  );
};

export default SingleCar;
