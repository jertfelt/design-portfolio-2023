import { useRouter } from "next/router";
import {useState, useEffect, useCallback, useContext } from "react";
import CaseIndividualPage from "@component/components/Frontend/Cases/CasesIndividual";
import { AppContext } from "@component/context/AppContext";
import { HeadIndexFrontend } from "@component/components/Head";
import cases from "../../../data/cases.json"
import casesENG from "../../../data/cases_EN.json"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"

// export async function getStaticPaths() {
//   const paths = cases.cases.map((c) => ({
//     params: { id: c.id.toString() },
//   }))

//   return { paths, fallback: false }
// }

export async function getServerSideProps({locale}){
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}

const Page = () => {
  const router = useRouter()
  let {id} = router.query 
  const {selectedPage, setSelectedPage} = useContext(AppContext)
  const {locales, locale: activeLocale} = router;
  const language = activeLocale;
  const [cases1, setCases] = useState("")
  useEffect(() => {
    
    if(language === "sv"){
      if(cases){
        setCases(cases.cases)


      }
    }
    else if (language === "en"){
      if(casesENG){
        setCases(casesENG.casesENG)
     
        
      }
    }
    else{
     
      console.log("Another language")
    }

  },[language])
  useEffect(() => {
    if(selectedPage.value !== "frontend"){
      setSelectedPage({value:"frontend", url:"/frontend"})
    }
  },[])
  useEffect(() => {
    if(!router.isReady) return;
    
  }, [router.isReady])




  useEffect(() => {
    if(cases){
      setCases(cases.cases)
    }
  },[])



  return (
  <><HeadIndexFrontend/>
      {cases1 &&
      <CaseIndividualPage
      array = {cases1}
      id = {id}
      />
     }
  </>
  )
}

export default Page
