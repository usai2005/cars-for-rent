import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Overlay,
  Modal,
  CloseButton,
  CloseIcon,
} from './DescriptionModal.styled';
import icons from '../../images/icons.svg';

const DescriptionModal = ({ closeDescriptionModal, car }) => {
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

  return (
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        <CloseButton onClick={closeDescriptionModal}>
          <CloseIcon>
            <use href={icons + '#icon-close-icon'}></use>
          </CloseIcon>
        </CloseButton>
      </Modal>
    </Overlay>
  );
};

export default DescriptionModal;
