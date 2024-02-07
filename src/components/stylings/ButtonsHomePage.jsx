import styled from "styled-components";

const Btn = styled.button`
  padding: 1rem;
  font-size: 16px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.contrast};
  color: ${({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.contrast};
  &:hover {
    color: ${({ theme }) => theme.contrast};
    background: transparent;
  }
  font-weight: bold;
`;

export const SmallPrimaryBtn = styled(Btn)`
  width: 100px;
`;

export const LinkBtn = styled(Btn)`
  background: ${({ theme }) => theme.startcontrast};
  text-decoration: underline;
  padding: 12px;
  color: ${({ theme }) => theme.startbody};
  border: 2px solid ${({ theme }) => theme.startcontrast};
  &:hover {
    border: 2px solid ${({ theme }) => theme.contrast};
  }
`;
