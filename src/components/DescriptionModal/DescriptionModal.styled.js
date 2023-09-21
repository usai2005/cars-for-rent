import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 200;
`;

export const Modal = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 541px;

  max-width: 541px;
  height: 752px;
  max-height: 752px;

  background-color: #ffffff;

  border-radius: 24px;
  z-index: 200;
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 16px;
  right: 16px;

  width: 24px;
  height: 24px;

  background-color: transparent;
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;

  transition: stroke 250ms linear;

  stroke: #121417;

  &:hover {
    stroke: #3470ff;
  }
`;
