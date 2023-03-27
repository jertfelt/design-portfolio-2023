import styled from "styled-components";
import { contacts } from "@component/data/contactdetails";
const Section = styled.section`
max-width: 100vw;
width:100vw;
padding:5rem;
padding-top:10rem;
display:flex;
flex-direction: column;
box-sizing: border-box;
color: ${({ theme }) => theme.textPrimary};
@media (max-width: 700px){
  padding:2rem;
}
h1{
  font-size:80px;
  color: ${({ theme }) => theme.accentTwo};
}
div{
  display:flex;
  flex-direction:column;
  gap:16px;
  button{
    background: ${({ theme }) => theme.accentTwo};
    border:none;
    padding:10px;
   
    color:${({ theme }) => theme.textSecondary};
    
    &:hover{
     color:${({ theme }) => theme.accent};
     background:${({ theme }) => theme.contrast};
   
    }
   
  }
  p{
    line-height:1.5rem;
  }
}
`

const Contact = () => {
  return ( 
  <Section>
    <h1>Kontakta mig:</h1>
    <div>
      {contacts && contacts.map((item, index) => 
      <div key={index}>
      {item.type === "phone" || item.type === "email"
      ?<p>{item.type.toUpperCase()}: {item.data}</p>
      : <a href={item.type === "linkedin" ? `https://www.linkedin.com/in/${item.data}` : `https://www.instagram.com/${item.data}`}>
      <button>
        {item.type.toUpperCase()}
      </button>
    </a>}
       </div>)}
    </div>
  </Section> );
}
 
export default Contact;