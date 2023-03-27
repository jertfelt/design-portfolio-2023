import styled from "styled-components"

const Button = styled.button`
  background:transparent;
  border:none;
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 30px;
  min-width:50px;
  cursor: pointer;
  font-size:1.5rem;
  gap: 4px;
  [data-icon]:before {
    font-family: 'ussfont';
    content: attr(data-icon);
    speak: none;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
  }
 
  &:hover{
    color:${({ theme }) => theme.contrast};
   
  }
  &:active{
    color:${({ theme }) => theme.white};
  }

`;

const Toggle = ({theme, toggleTheme }) => {
    return (
        <Button 
        onClick={toggleTheme} 
        data-testid="toggleDarkMode"
        aria-pressed="false">
          {theme === "light" ? (
            <>
          <span 
          aria-hidden="true" 
          data-icon="&#x263E;"/>
          <span>
          </span>
          </>
          ):(
            <>
            <span 
            aria-hidden="true" 
            data-icon="&#9788;"/>
            <span>
              </span>
            </>
          )}
        </Button>
    );
};

export default Toggle;