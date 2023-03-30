import { useRouter } from "next/router";

import styled from "styled-components";
import { Container } from "@component/components/stylings/Containers";
import { flex, device } from "@component/components/stylings/Stylings";
import { getDb } from "@component/components/api/getDb.js";


import {useState, useEffect, useCallback, useContext } from "react";
import CaseIndividualPage from "@component/components/Frontend/Cases/CasesIndividual";
import { AppContext } from "@component/context/AppContext";


const Content = styled.section`
background-color: ${({theme}) => theme.frontendcolors.background};
min-height:130vh;
${flex}
`

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

  //*------from cases.js in data, instead of fb:
  const [cases, setCases] = useState("")
  const {data, error, loading} = getDb("/cases/")
  //fb:
  const [result, setResult] = useState(null)
  const fetchData = useCallback(async () => {
    const newData = await getData();
    setResult(newData)
  })
  useEffect(() => {
    if(data){
      setCases(data)
    }
  },[data])



  return (
  <>
      {cases && 
      <CaseIndividualPage
      array = {cases}
      id = {id}
      />}
  </>
  )
}

export default Page
