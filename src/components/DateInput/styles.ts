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
  width: 100%;
`;

export const Field = styled.div`
  padding: 8px 16px;
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.lightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Month = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
`;

export const Year = styled.span`
  font-size: 0.7rem;
  font-weight: 400;
`;

export const AddonImage = styled.img`
  width: 6px;
`;

export const AddonLeft = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.lightGray};
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
  transition: background-color 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  margin: 0;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: ${({ theme }) => theme.superlightGray};
  }

  &:last-child {
    > ${AddonImage} {
      transform: rotateY(180deg);
    }
  }
`;

export const AddonRight = styled(AddonLeft)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: none;
  border-right: 1px solid ${({ theme }) => theme.lightGray};
`;
