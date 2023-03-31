import initFirebase from "./initialize";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState} from "react";

const GetDb =(route1) =>{
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(false)

  const getDatafromFirebase = (route1) => {
    const db = getDatabase()
    
        onValue(ref(db,route1), (snapshot) => {
          if(snapshot.exists()){
            setData(snapshot.val())
          }
        
      })
  }
  useEffect(() => {(
    async function(){
      try{
        setLoading(true)
        initFirebase()
        getDatafromFirebase(route1)
      }catch(err){
        setError(err)
      }finally{
        setLoading(false)
      }
    })()
  },[route1])
  
  return {data, error, loading}
}

export default GetDb