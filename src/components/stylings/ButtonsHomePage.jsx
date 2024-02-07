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
  font-family: JetBrains Mono;
  font-weight: 900;
`;

export const SmallPrimaryBtn = styled(Btn)`
  width: 120px;
  text-align: center;
`;

export const LinkBtn = styled(Btn)`
  background: ${({ theme }) => theme.startcontrast};

  padding: 10px;
  color: ${({ theme }) => theme.startbody};
  border: 2px solid ${({ theme }) => theme.startcontrast};
  &:hover {
    border: 2px solid ${({ theme }) => theme.contrast};
  }
  font-weight: 900;
  letter-spacing: 1px;
`;
