import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  max-width: 450px;
  width: 100%;

  @media screen and (max-width: 550px) {
    margin-bottom: 0;
  }
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
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  flex: 0 1 50%;

  &:first-child {
    margin-right: 8px;
  }

  &:last-child {
    margin-left: 8px;
  }

  @media screen and (max-width: 550px) {
    flex: 0;
    width: 100%;

    &:first-child {
      margin-right: 0px;
      margin-bottom: 8px;
    }

    &:last-child {
      margin-left: 0px;
      margin-top: 8px;
    }
  }
`;

export const SummaryContainer = styled.div`
  margin: 24px 0;
`;

export const SubmitButton = styled.button`
  display: block;
  width: calc(100% - 64px);
  margin: 0 auto;
  padding: 16px;
  border: none;
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  border-radius: 1000px;

  &:hover {
    background: ${({ theme }) => theme.lightBlue};
    cursor: pointer;
  }

  &:focus,
  &:active {
    background: ${({ theme }) => theme.lightBlue};
  }
`;

export const BackRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  position: relative;
`;

export const BackButton = styled.button`
  margin-right: auto;
  display: block;
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 10000px;
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.lightGray};
  transition: background 0.3s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.lightGray};
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const ButtonImage = styled.img`
  width: 6px;
`;

export const BackText = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.blue};
  font-size: 1.1rem;

  @media screen and (max-width: 550px) {
    position: static;
  }
`;
