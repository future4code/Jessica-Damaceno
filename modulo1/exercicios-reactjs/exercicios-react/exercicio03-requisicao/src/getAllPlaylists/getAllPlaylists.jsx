// import { useState, useEffect } from 'react'
// import axios from "axios"

// const url_base = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";


// const [playLists, setplayLists] = useState([]);
 
// console.log(playLists)

// useEffect (() => {
//   getAllPlaylists()
// }, []);


// // const list = playLists.map((item) => {
// //     return
// //       <getAllPlaylists id={item.id} name={item.name}/>
// //   })

// const getAllPlaylists = () => {
//   axios.get(url_base, {
//     headers: {
//       Authorization: "jess-damaceno-marzo"
//     }
//   })
//   .then((res) => {
//     console.log("requisição", res. data.result)
//     setplayLists(res.data.result)
//   }).catch((err) => console.log(err.response))

//   // return (
//   //   <h1>get</h1>
//   // )
// }

// export default getAllPlaylists