// import React, { useState } from 'react'
import axios from 'axios'

// export default function App() {

//   const [response, setResponse] = useState();


//   const getData = async (URL) => {
//     const req = await axios.get(URL)
//     try {
//       console.log(req);
//       setResponse(req.data);
//       return req
//     } catch (e) {
//       console.error(e);
//     }
// }

//   return (
//     <div>
//       <button onClick={() => getData('https://jsonplaceholder.typicode.com/todos')}>Click</button>

//       {response?.map(item =>
//         <div>
//           {item.title}
//         </div>
//       )}
//     </div>
//   )
// }


// import React, { useState } from 'react'
// import { useEffect } from 'react'

// export default function App() {
//   const [response, setResponse] = useState();

//   const [randomNumber, setRandomNumber] = useState();

//   const [counter, setCounter] = useState(0)

//   useEffect(() => {
//     const newRandomNumber = Math.floor(Math.random() * 100)
//     setRandomNumber(newRandomNumber)
//   },[counter])

//   useEffect(() => {
//     const getData = async (URL) => {
//       const req = await axios.get(URL)
//       try {
//         console.log(req);
//         setResponse(req.data);
//         return req
//       } catch (e) {
//         console.error(e);
//       }
//     }
//     getData('https://jsonplaceholder.typicode.com/todos/1')
//   }, [])

//   const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds=> prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId);
    }
  }, [])

//   return (
//     <div>
//       <h1>Прошло {seconds} секунд </h1>
//       {randomNumber}
//       <button onClick={() => setCounter(counter + 1)}>click</button>
//       <br />
//       {response?.title}
//     </div>
//   )
// }



import React, { useEffect, useState } from 'react'

export default function App() {

  // useEffect(() => {

  // }, []) == mounted(){}

  
  // useEffect(() => {

  // }) == updated(){}


  const [variable,setVariable] = useState()
  


  // useEffect(()=>{

  // },[variable]) 


  // useEffect(()=>{

  //   return ()=>{

  //   }
  // }) == destroyed(){}

  
  return (
    <div>App</div>
  )
}

