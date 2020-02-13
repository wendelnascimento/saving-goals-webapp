import styled from 'styled-components';

export const Container = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Legend = styled.legend`
  color: ${({ theme }) => theme.almostBlack};
  font-size: 0.7rem;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
`;

export const Field = styled.input`
  padding: 8px;
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-weight: 700;
  font-size: 1.5rem;
  width: 100%;
`;

export const AddonInput = styled.div`
  padding: 8px 16px;
  background: ${({ theme }) => theme.superlightGray};
  color: ${({ theme }) => theme.darkGray};
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
