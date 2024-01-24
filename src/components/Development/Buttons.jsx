import styled from "styled-components";
import { useRouter } from "next/router";

const Btn = styled.button`
  // width: 120px;
  // height: 38px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 19px;
  border: 2px solid;
  font-weight: bold;
  font-size: 1rem;
  font-family: JetBrains Mono;
`;

const PrimaryButt = styled(Btn)`
  border-color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.spaceyellow};
  color: ${({ theme }) => theme.black};
  &:hover {
    background: ${({ theme }) => theme.spaceblue};
  }
`;

const SecondaryButt = styled(Btn)`
  border-color: ${({ theme }) => theme.frontendnew.txtprimary};
  color: ${({ theme }) => theme.frontendnew.txtprimary};
  background: transparent;
  &:hover {
    background: ${({ theme }) => theme.spaceblue};
  }
`;
const CustomButt = ({ action, type, aria, txt }) => {
  const router = useRouter();
  const sendToLink = (link) => {
    window.location.href = link;
  };

  const handleClick = (action) => {
    switch (action) {
      case "linkedin":
        sendToLink("https://www.linkedin.com/in/tovajertfelt/");
        break;
      case "contact":
        router.push("/contact");
        break;
      default:
        console.log("CLICKED");
    }
  };

  const ButtonComponent = type === "primary" ? PrimaryButt : SecondaryButt;

  return (
    <ButtonComponent onClick={() => handleClick(action)} aria-label={aria}>
      {txt}
    </ButtonComponent>
  );
};

export default CustomButt;
