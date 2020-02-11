import styled from 'styled-components';

export const Bar = styled.header`
  max-width: 100vw;
  width: 100%;
  background: ${({ theme }) => theme.white};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.superlightGray};
`;
