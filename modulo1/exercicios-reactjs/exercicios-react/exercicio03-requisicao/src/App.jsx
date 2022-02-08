import { useState, useEffect } from 'react'
import axios from "axios"

import './App.css'

const url_base = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";


function App() {
  const [playLists, setplayLists] = useState([]);
  // console.log("guardando a playLists", playLists)
  const [inputValue, setInputValue] = useState("");
  

  const onChangeInputValue = (event) => {
    setInputValue(event.target.value);
  };
    

  useEffect (() => {
    getAllPlaylists()
  }, []);

  const getAllPlaylists = () => {
    axios.get(url_base, {
      headers: {
        Authorization: "jess-damaceno-marzo"
      }
    })
    .then((res) => {
      console.log("requisição", res.data.result)
      setplayLists(res.data.result.list)
    }).catch((err) => console.log(err.response))
  }
  
  
  const musicList = playLists.map((playList) => {
    return (
      <p key={playList.id}>  
         {playList.name}
      </p>
      )
  })

  
  const createPlaylist = () => {
    const body = {
      name: inputValue
    }

    axios.post(url_base, body, {
      headers: {
        Authorization: "jess-damaceno-marzo"
      }
    })
    .then((res) => {
      console.log("requisição 02", res.data.result)
      getAllPlaylists()
    }).catch((err) => console.log(err.response))
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          play list
        </h1>
        {musicList}
        <input value={inputValue} onChange={onChangeInputValue} />
        <button onClick={createPlaylist}>Add play list</button>
      </header>
    </div>
  )
}

export default App
