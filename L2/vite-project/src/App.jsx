// import React, { useState } from 'react'
// import './App.css'

// export default function App() {
//   const [str, setStr] = useState('Привет мир!')
//   const [arr, setArr] = useState([
//     'red',
//     'blue',
//     'green',
//     'black',
//   ])

//   const randNum = Math.ceil(Math.random() * 4)

//   const bool = true;

//   return (
//     <div>
//       <h2>{str}</h2>
//       <button onClick={() => setStr('Другой текст')}>Изменить ее на что нибудь другое</button>
//       <br />
//       {randNum}
//       {bool ? 'Истина' : 'Ложь'}
//       <ul>
//         {arr.map((color, i) => {
//           if (i + 1 == randNum) {
//             return (
//               <li key={i}>
//                 <img src={color} alt="#" />
//                 <p style={{ color: color, fontSize: '24px' }}>{color}</p>
//               </li>
//             )
//           } else if (i == 0) {
//             <h2></h2>
//           } else {
//             return (
//               <li>
//                 <p>Unlucky( Try again</p>
//               </li>
//             )
//           }
//         }

//         )}
//       </ul>
//     </div >
//   )
// }



import React, { useState } from 'react'
import Child from './components/Child'

export default function App() {
  const [str, setStr] = useState('Это сообщение от App.jsx')


  return (
    <div>
      {str}
      <Child title='это чайлд' setStr={setStr} />
    </div>
  )
}
