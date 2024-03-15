// import React from 'react'

// export default function App() {
//   let number = 1
//   const str = 'Привет мир!'

//   const obj = { color: 'red', backgroundColor: 'blue' }

//   const incriment = () => {
//     number++
//   }

//   return (
//     <div className="" style={obj} >

//       App <br />
//       {str}
//       <label htmlFor="chck">Окей?</label>
//       <input type="checkbox" id='chck' defaultChecked />
//       <input type="text" defaultValue="Привет" className={str} />
//     </div>
//   )
// }


// import React, { useState } from 'react'

// export default function App() {
//   const [counter, setCounter] = useState(0);
//   const [inpValue, setInpValue] = useState()

//   const incriment = () => {
//     setCounter(counter + 1)
//   }
//   const decriment = () => {
//     setCounter(counter - 1)
//   }
//   const incrimentByFive = () => {
//     setCounter(counter + 5)
//   }

//   const incrimentByInput = () => {
//     setCounter(counter + inpValue)
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       {counter}
//       <div>
//         <button onClick={incriment}>+</button>
//         <button onClick={decriment}>-</button>
//       </div>
//       <button onClick={incrimentByFive}>5</button>
//       <br />

//       <input type="text" onInput={(event) => setInpValue(+event.target.value)} />
//       <button onClick={incrimentByInput}>Incriment by number</button>
//     </div>
//   )
// }

import React, { useState } from 'react'

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: 'Alex',
      gender: 'male'
    },
    {
      id: 1,
      name: 'Mia',
      gender: 'female'
    },
    {
      id: 2,
      name: 'Dean',
      gender: 'male'
    },
    {
      id: 3,
      name: 'Ruby',
      gender: 'female'
    },
  ])

  const addNewUser = (newUser) => {
    // const tempArr = [...users]
    // tempArr.push(newUser)
    setUsers([...users, newUser])
  }

  const removeUser = (index) => {
    // setUsers(users.filter(user => user.id != id))
    const tempArr = [...users]
    tempArr.splice(index, 1);
    setUsers(tempArr)
  }

  const changeUser = (id, newName) => {
    const tempArr = users.map(user => {
      if (user.id == id) {
        return { ...user, name: newName }
      } else {
        return user
      }
    })
    setUsers(tempArr)
  }


  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="user">
          <h1>{user.name}</h1>
          <h2>{user.gender}</h2>
        </div>
      ))}
      <button onClick={() => addNewUser({ id: 12313, name: 'newUser', gender: 'some' })}>Add</button>
      <button onClick={() => removeUser(0)}>Remove first</button>
      <button onClick={() => changeUser(0, { id: 0, name: 'Not Alex', gender: 'female' })}>Change Alex</button>
      <button onClick={() => changeUser(0, 'not Alex')}>Rename Alex</button>
    </div>
  )
}
