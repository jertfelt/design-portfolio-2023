import CVFrontend from "@component/components/Frontend/MainElements/CV";
import { HeadIndexFrontend } from "@component/components/Head";
import { AppContext } from "@component/context/AppContext";
import { useContext, useEffect } from "react";
import styled from "styled-components"

const BackgroundCV = styled.section`
background:${({theme}) => theme.frontendcolors.accent};
`



const frontendCV = () => {
  const {selectedPage, setSelectedPage} = useContext(AppContext)

  useEffect(() => {
    if(selectedPage.value !== "frontend"){
      setSelectedPage({value:"frontend", url:"/frontend"})
    }
  },[])
  return (<><HeadIndexFrontend/>
  <BackgroundCV>
  <CVFrontend/>
  </BackgroundCV></>  );
}
 
export default frontendCV;