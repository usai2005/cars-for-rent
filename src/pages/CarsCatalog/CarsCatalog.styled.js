import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  row-gap: 50px;
  column-gap: 29px;

  margin-bottom: 100px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMoreBtn = styled.button`
  color: #3470ff;
  font-family: ManropeMedium;
  line-height: calc(24 / 16);

  text-decoration: underline;

  background-color: transparent;

  &:hover {
    color: #0b44cd;
  }
`;
