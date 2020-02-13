import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 32px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.lightGray};

  @media screen and (max-width: 550px) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: none;
  }
`;
