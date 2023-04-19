import axios from 'axios'
import { useEffect, useState } from 'react'



function useApi (url){

    const [data, setData] = useState([])

    useEffect(()=>{
            axios.get(url)
            .then(response => setData(response.data.todos))
    },[url])

    if(data){
        return {data, setData}
    }

}

export default useApi