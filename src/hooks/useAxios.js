import axios from "axios";
import { useEffect, useState } from "react";



const useAxios = (param) => {

    const [response,SetResponse]=useState([])
    const [isLoading,SetIsLoading]=useState([false])
    const [error,SetError]=useState('')
    axios.defaults.baseURL='https://api.unsplash.com'
    const fetchData=async (url)=>{

        try{

            SetIsLoading(true)
            const res=await axios(url)
            SetResponse(res.data.results) 

        }
        catch(err){
            SetError(err)
        }finally{
            SetIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData(param)

    },[param])
    
  return {

    response:response,
    isLoading:isLoading,
    error,
    fetchData:url=>fetchData(url)
   
  }
}

export default useAxios