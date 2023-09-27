import styled from 'styled-components';

export const Card = styled.li`
  position: relative;

  width: 274px;
  height: 426px;
`;

export const ImgThumb = styled.div`
  width: 274px;
  height: 268px;

  margin-bottom: 14px;

  border-radius: 14px;

  overflow: hidden;

  & img {
    object-fit: contain;
    object-position: 50% 50%;
    width: auto;
    height: 268px;
    /* max-height: 268px; */
  }
`;

export const ModelYearPrice = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;

  & > p {
    font-size: 16px;
    font-family: ManropeMedium;
    color: #121417;

    line-height: calc(24 / 18);
  }

  & h2 {
    font-size: 16px;
    font-family: ManropeMedium;
    font-weight: 500;
    color: #121417;

    line-height: calc(24 / 16);

    & span {
      color: #3470ff;
    }
  }
`;

export const Characteristics = styled.ul`
  display: flex;
  flex-direction: column;
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

export const LearnMoreBtn = styled.button`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 44px;

  border-radius: 12px;
  background-color: #3470ff;

  color: #ffffff;
  font-size: 14px;
  font-family: ManropeSemiBold;
  line-height: calc(20 / 14);

  transition: background-color 250ms linear;

  &:hover {
    background-color: #0b44cd;
  }
`;

export const FavoriteBtn = styled.button`
  position: absolute;

  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;

  background-color: transparent;

  stroke: #ffffff;
  fill: none;
`;

export const FavoriteIcon = styled.svg`
  width: 18px;
  height: 18px;
`;
