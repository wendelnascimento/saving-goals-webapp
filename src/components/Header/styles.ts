import styled from 'styled-components';

import { Image } from '../Logo/styles';

export const Bar = styled.header`
  max-width: 100vw;
  width: 100%;
  background: ${({ theme }) => theme.white};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.superlightGray};

  @media screen and (max-width: 550px) {
    justify-content: center;

    > ${Image} {
      position: absolute;
    }
  }
`;

export const BackButton = styled.button`
  display: none;

  @media screen and (max-width: 550px) {
    background: ${({ theme }) => theme.white};
    border: none;
    display: block;
    margin-right: auto;
    display: block;
    width: 40px;
    height: 40px;
    padding: 8px;
  }
`;

export const ButtonImage = styled.img`
  width: 6px;
`;
