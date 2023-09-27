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

  padding: 40px;

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

export const ImgThumb = styled.div`
  width: 461px;
  height: 248px;

  overflow: hidden;

  border-radius: 14px;

  margin-bottom: 14px;

  & img {
    object-fit: contain;
    object-position: 50% 50%;
    width: 461px;
    height: auto;
  }
`;

export const ModelYear = styled.div`
  display: flex;

  margin-bottom: 8px;

  & h2 {
    font-size: 18px;
    font-family: ManropeMedium;
    font-weight: 500;
    color: #121417;

    line-height: calc(24 / 18);

    & span {
      color: #3470ff;
    }
  }
`;

export const Characteristics = styled.ul`
  display: flex;
  flex-direction: column;

  margin-bottom: 14px;
`;

export const FirstCharacteristicsLine = styled.ul`
  display: flex;

  margin-bottom: 4px;

  & > li {
    display: flex;
    align-items: center;

    height: 16px;

    &:not(:last-child) {
      margin-right: 6px;
      padding-right: 6px;

      border-right: 1px solid rgba(18, 20, 23, 0.1);
    }
  }

  & p {
    font-size: 12px;
    font-family: ManropeRegular;
    color: rgba(18, 20, 23, 0.5);
  }
`;

export const SecondCharacteristicsLine = styled.ul`
  display: flex;
  & :not(:last-child) {
    margin-right: 6px;
    padding-right: 6px;

    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  & p {
    font-size: 12px;
    font-family: ManropeRegular;
    color: rgba(18, 20, 23, 0.5);
    line-height: calc(18 / 12);
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;

  color: #121417;
  font-family: ManropeRegular;
  font-size: 14px;
  line-height: calc(20 / 14);
`;

export const ModuleTitle = styled.h3`
  margin-bottom: 8px;

  color: #121417;
  font-family: ManropeMedium;
  font-size: 14px;
  line-height: calc(20 / 14);
`;

export const AccessoriesAndFunctionality = styled.ul`
  display: flex;
  flex-direction: column;

  margin-bottom: 14px;
`;

export const AccessoriesLine = styled.ul`
  display: flex;

  margin-bottom: 4px;

  & > li {
    display: flex;
    align-items: center;

    height: 16px;

    &:not(:last-child) {
      margin-right: 6px;
      padding-right: 6px;

      border-right: 1px solid rgba(18, 20, 23, 0.1);
    }
  }

  & p {
    font-size: 12px;
    font-family: ManropeRegular;
    color: rgba(18, 20, 23, 0.5);
  }
`;

export const FunctionalityLine = styled.ul`
  display: flex;
  & :not(:last-child) {
    margin-right: 6px;
    padding-right: 6px;

    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }

  & p {
    font-size: 12px;
    font-family: ManropeRegular;
    color: rgba(18, 20, 23, 0.5);
    line-height: calc(18 / 12);
  }
`;
