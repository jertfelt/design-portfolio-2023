import styled from "styled-components";

const Btn = styled.button`
  border: none;
  background: none;
  padding: 0;
  font-size: inherit;
`;

const DropDownBtn = styled(Btn)``;

export const ExhibitionsBtn = styled(Btn)`
  color: ${({ theme }) => theme.artshared.greentxt};
  letter-spacing: 1px;
  font-family: Arya;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
