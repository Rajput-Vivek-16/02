import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
function App() {
  const [infos, setInfos] = useState([])
  useEffect(()=>{
    axios.get('/api/info') //standard
    .then((response) => {
      setInfos(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }, [])
  return (
    <>  
      <h1>Connecting frontend and backend</h1>
      <p>Infos: {infos.length}</p>
        {infos.map((info)=>(
          <div key={info.id}>
            <h2>{info.title}</h2>
            <p>{info.content}</p>
          </div>
        ))}
    </>
  )
}

export default App
