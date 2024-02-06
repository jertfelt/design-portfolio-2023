import styled from "styled-components";

export const ButtonPrimary = styled.button`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.frontendnew.primaryTxt};
  color: ${({ theme }) => theme.frontendnew.altTxt};
  padding: 6px 12px 6px 12px;
  font-family: ${({ theme }) => theme.fonts.stats.primary};
  font-weight: 700;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.frontendnew.headerOne};
    box-shadow: 0 4px 8px ${({ theme }) => theme.frontendnew.pink};
  }
  font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.bread};
`;

export const ButtonSecondary = styled.button`
  padding: 10px;
  border-radius: 20px;
  background: none;
  font-family: ${({ theme }) => theme.fonts.stats.primary};
  font-weight: 700;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.frontendnew.primaryTxt};
  color: ${({ theme }) => theme.frontendnew.primaryTxt};
  font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.bread};
  &:hover {
    border: 2px solid ${({ theme }) => theme.frontendnew.headerOne};
    color: ${({ theme }) => theme.frontendnew.headerOne};
    box-shadow: 0 4px 8px ${({ theme }) => theme.frontendnew.pink};
  }
`;
