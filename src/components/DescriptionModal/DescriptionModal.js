import { useEffect, useCallback } from 'react';
import {
  Overlay,
  Modal,
  CloseButton,
  CloseIcon,
  ImgThumb,
  ModelYear,
  FirstCharacteristicsLine,
  SecondCharacteristicsLine,
  Description,
  Characteristics,
  ModuleTitle,
  AccessoriesAndFunctionality,
  AccessoriesLine,
  FunctionalityLine,
} from './DescriptionModal.styled';
import icons from '../../images/icons.svg';
import getPicture from '../GetPictureFoo';

const DescriptionModal = ({ closeDescriptionModal, car }) => {
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
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
  } = car;

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeDescriptionModal();
      }
    },
    [closeDescriptionModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeDescriptionModal();
    }
  };

  const picture = getPicture(img, photoLink);

  const addressArr = address.split(', ');

  return (
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        <CloseButton onClick={closeDescriptionModal}>
          <CloseIcon>
            <use href={icons + '#icon-close-icon'}></use>
          </CloseIcon>
        </CloseButton>
        <ImgThumb>
          <img src={picture} alt={`${make} ${model} `} />
        </ImgThumb>
        <ModelYear>
          <h2>
            {make} <span>{model}</span>, {year}
          </h2>
        </ModelYear>
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
                <p>id: {id}</p>
              </li>
              <li>
                <p>Year: {year}</p>
              </li>
            </FirstCharacteristicsLine>
          </li>
          <li>
            <SecondCharacteristicsLine>
              <li>
                <p>Fuel Consumption: {fuelConsumption}</p>
              </li>
              <li>
                <p>Engine Size: {engineSize}</p>
              </li>
            </SecondCharacteristicsLine>
          </li>
        </Characteristics>
        <Description>{description}</Description>
        <ModuleTitle>Accessories and functionalities:</ModuleTitle>
        <AccessoriesAndFunctionality>
          <li>
            <AccessoriesLine>
              {accessories.map((accessory, i) => {
                return (
                  <li key={i + 1}>
                    <p>{accessory}</p>
                  </li>
                );
              })}
            </AccessoriesLine>
          </li>
          <li>
            <FunctionalityLine>
              {functionalities.map((funcItem, i) => {
                return (
                  <li key={i + 1}>
                    <p>{funcItem}</p>
                  </li>
                );
              })}
            </FunctionalityLine>
          </li>
        </AccessoriesAndFunctionality>
        <ModuleTitle>Rental Conditions: </ModuleTitle>
      </Modal>
    </Overlay>
  );
};

export default DescriptionModal;
