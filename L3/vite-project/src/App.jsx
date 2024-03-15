// import React, { useState } from 'react'

// export default function App() {
//   const [str, setStr] = useState('')



//   const clearBtn = () => {
//     setStr('')
//   }

//   const changeStr = (newStr) => {
//     setStr(newStr)
//   }

//   // const changeStr = (newStr) => {
//   //   if (str.length > 10 && !str.length > newStr) {
//   //     return alert('Максимальная длина строки 10 символов')
//   //   } else {
//   //     setStr(newStr)
//   //   }
//   // }
//   return (
//     <div>
//       <span style={{ color: 'red', textAlign: 'center' }}>{str}</span><br />
//       <input type="text" value={str} onChange={(event) => changeStr(event.target.value)} />

//       <button onClick={clearBtn}>Clear str</button>
//     </div>
//   )
// }


import React, { useState } from 'react'

export default function App() {
  const [username, setUsername] = useState('Введите свое имя')



  const clearBtn = () => {
    setUsername('')
  }

  const changeStr = (newStr) => {
    setUsername(newStr)
  }

  // const changeStr = (newStr) => {
  //   if (str.length > 10 && !str.length > newStr) {
  //     return alert('Максимальная длина строки 10 символов')
  //   } else {
  //     setStr(newStr)
  //   }
  // }
  return (
    <div>
      {username &&
        <span style={{ color: 'red', textAlign: 'center' }}>{username}<br /></span>
      }

      <input type="text" value={username} onChange={(e) => changeStr(e.target.value)} />
      <button onClick={clearBtn}>Clear str</button>

      <Child item={item} setItem={setItem} />
    </div>
  )
}
