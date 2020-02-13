import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  max-width: 450px;
  width: 100%;
`;

export const SavingIcon = styled.img`
  width: 32px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0;
  margin-top: 8px;
`;

export const Subtitle = styled.h2`
  font-size: 0.7rem;
  font-weight: 300;
  color: ${({ theme }) => theme.gray};
  margin-top: 0;
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  flex: 0 1 50%;

  &:first-child {
    margin-right: 8px;
  }

  &:last-child {
    margin-left: 8px;
  }
`;
