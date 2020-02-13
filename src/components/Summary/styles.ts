import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.lightGray};
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const SummaryTitle = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.black};
`;

export const SummaryValue = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.lightBlue};
`;

export const SummaryRowGray = styled(SummaryRow)`
  background: ${({ theme }) => theme.superlightGray};
`;

export const SummaryDescription = styled.span`
  font-size: 0.7rem;
`;
