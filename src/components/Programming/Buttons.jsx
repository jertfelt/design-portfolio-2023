import styled from "styled-components";
import Link from "next/link";

export const Button = styled.button`
  border-radius: 20px;

  font-size: ${({ theme }) => theme.fonts.size.mobile.frontend.bread};
  cursor: pointer;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.stats.primary};
  padding: 10px;
  &:hover {
    box-shadow: 0 4px 8px ${({ theme }) => theme.frontendnew.pink};
  }
  min-width: 160px;
  max-width: 160px;
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${({ theme }) => theme.frontendnew.primaryTxt};
  color: ${({ theme }) => theme.frontendnew.altTxt};
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.frontendnew.headerOne};
  }
`;

export const ButtonSecondary = styled(Button)`
  background: none;
  border: 2px solid ${({ theme }) => theme.frontendnew.primaryTxt};
  color: ${({ theme }) => theme.frontendnew.primaryTxt};
  &:hover {
    border: 2px solid ${({ theme }) => theme.frontendnew.headerOne};
    color: ${({ theme }) => theme.frontendnew.headerOne};
  }
`;

export const LinkExternal = ({ linkurl, linktxt }) => {
  const handleClick = () => {
    window.open(linkurl, "_blank");
  };
  return <ButtonSecondary onClick={handleClick}>{linktxt}</ButtonSecondary>;
};

export const LinkNavigation = ({ href, linktxt }) => {
  return (
    <Link href={href} passHref>
      <ButtonPrimary>{linktxt}</ButtonPrimary>
    </Link>
  );
};
