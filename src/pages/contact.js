import styled from "styled-components";
import { contacts } from "@component/data/contactdetails";
import {useTranslation } from "next-i18next";
import HeadIndex from "@component/components/Head";
import withTranslation, {getStaticProps} from "@component/components/utils/getStaticProps";


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
  @media (max-width:800px){
    font-size:50px;
    padding-top:40vh;
  }
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
    @media (max-width:800px){
      line-height:.5rem;
    }
  }
}
`

const Form = styled.form`
max-width:500px;
@media(max-width:700px){
  width:80%;
}
display:flex;
flex-direction: column;
gap:.5rem;
label{
  line-height:1.3rem;
  
}
input{
max-width:60%;
}
textarea{
  min-width:50%;
  max-width:100%;
}
button{
max-width:60%;
}
`

const Contact = () => {
  const {t} = useTranslation();

  return ( <>
  <HeadIndex/>
  <Section>
    <h1>{t("contact.h1")}</h1>
    <div>
      {contacts && contacts.map((item, index) => 
      <div key={index}>
      {item.type === "phone:" || item.type === "email:"
      ?<p>{item.type === "phone" ? <>{t("contact.phone")}</> : item.type.toUpperCase()}  {item.data}</p>
      : <a href={item.type === "linkedin" ? `https://www.linkedin.com/in/${item.data}` : `https://www.instagram.com/${item.data}`}>
      <button>
        {item.type.toUpperCase()}
      </button>
    </a>}
       </div>)}
    </div>
    {/* <div>
      <h2>{t("contact.form")}</h2>
      <Form name="contactTova" method="POST" data-netlify="true">
        <label htmlFor="inputName">{t("contact.namn")}</label>
        <input type="text" name="name" id="inputName"></input>
        <label htmlFor="inputEmail">Email:</label>
        <input type="email" name="email" id="inputEmail"></input>
        <label htmlFor="textarea">{t("contact.message")}:</label><textarea name="message" id="textarea"></textarea>
        <button type="submit">{t("contact.sendbtn")}</button>
      </Form>
    </div> */}
  </Section></> );
}
export {getStaticProps}
export default withTranslation(Contact)