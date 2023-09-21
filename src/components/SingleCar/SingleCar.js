import PropTypes from 'prop-types';

import {
  Card,
  ImgThumb,
  ModelYearPrice,
  ModelYear,
  Description,
  FirstDescriptionLine,
  SecondDescriptionLine,
  LearnMoreBtn,
  FavoriteBtn,
  FavoriteIcon,
} from './SingleCar.styled';

import icons from '../../images/icons.svg';

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

  // console.log(chosenFavoriteCars);

  const isFavoriteCar = chosenFavoriteCars.some(
    chosenCar => chosenCar.id === car.id
  );

  function getPicture(img, photoLink) {
    if (img) {
      return img;
    } else if (photoLink) {
      return photoLink;
    }
  }

  const picture = getPicture(img, photoLink);

  const addressArr = address.split(', ');

  const iconBorderColor = isFavoriteCar ? '#3470FF' : '#FFFFFF';

  const iconColor = isFavoriteCar ? '#3470FF' : 'none';

  return (
    <Card>
      <ImgThumb>
        <img src={picture} alt={`${make} ${model} `} />
      </ImgThumb>
      <ModelYearPrice>
        <ModelYear>
          <h2>
            {make} <span>{model}</span>, {year}
          </h2>
        </ModelYear>
        <p>{rentalPrice}</p>
      </ModelYearPrice>
      <Description>
        <FirstDescriptionLine>
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
        </FirstDescriptionLine>
        <SecondDescriptionLine>
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
        </SecondDescriptionLine>
      </Description>

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

// SingleCar.propTypes = {
//   car: PropTypes.shape({
//     address: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//     img: PropTypes.string,
//     photoLink: PropTypes.string,
//     make: PropTypes.string.isRequired,
//     mileage: PropTypes.number.isRequired,
//     model: PropTypes.string.isRequired,
//     rentalCompany: PropTypes.string.isRequired,
//     rentalPrice: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     year: PropTypes.number.isRequired,
//   }).isRequired,
//   handleFavoriteBtnClick: PropTypes.func.isRequired,
//   openDescriptionModal: PropTypes.func.isRequired,
//   chosenFavoriteCars: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
