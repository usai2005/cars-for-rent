import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  display: flex;

  align-items: center;

  width: 1440px;
  height: 70px;

  padding-left: 128px;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(18, 20, 23, 0.2);
`;

export const Link = styled(NavLink)`
  display: flex;

  justify-content: center;
  align-items: center;

  border-radius: 10px;

  padding: 10px 30px;

  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.03em;

  color: #121417;

  &.active {
    color: #ffffff;
    background-color: #3470ff;
  }
`;

export const List = styled.ul`
  display: flex;

  /* & li {
    &:not(:last-child) {
      margin-right: 15px;
    }
  } */
`;
