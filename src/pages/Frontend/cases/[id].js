import { useRouter } from "next/router";
// import { GetDb } from "@component/components/api/getDb.js";
import {useState, useEffect, useCallback, useContext } from "react";
import CaseIndividualPage from "@component/components/Frontend/Cases/CasesIndividual";
import { AppContext } from "@component/context/AppContext";
import { HeadIndexFrontend } from "@component/components/Head";
import cases from "../../../data/cases.json"


const Page = () => {
  const router = useRouter()
  let {id} = router.query 
  const {selectedPage, setSelectedPage} = useContext(AppContext)

  useEffect(() => {
    if(selectedPage.value !== "frontend"){
      setSelectedPage({value:"frontend", url:"/frontend"})
    }
  },[])
  useEffect(() => {
    if(!router.isReady) return;
    
  }, [router.isReady])


  const [cases1, setCases] = useState("")
  // const {data, error, loading} = GetDb("/cases/")
  //fb:
  // const [result, setResult] = useState(null)
  // const fetchData = useCallback(async () => {
  //   const newData = await getData();
  //   setResult(newData)
  // })
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
