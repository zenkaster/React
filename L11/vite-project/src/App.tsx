import React, { useState } from "react";
import Child from "./components/Child";


export type UsersType = {
  id: number,
  name: string,
  login: string,
  age?: number,
  isActive: boolean,
}


export default function App() {
  // Number = 1
  // String = ''
  // Object = {}
  // Array = []
  // Boolean = true / false

  let str: string;
  str = 'string';
  const num: number = 5;
  const [bool, setBool] = useState<boolean>(false)

  // const posts: Object[] = [{},{}]
  // const posts: Array<Object> = [{}, {}]

  const foo = (num: number, str: string): number => {
    console.log(str);
    return num
  }

  const users: Array<UsersType> = [
    {
      id: 0,
      name: '123',
      login: '222',
      age: 55,
      isActive: false,
    },
  ]

  const test = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);

  }



  return (
    <div>
      {bool && num} <br />
      <button onClick={() => setBool(!bool)}>Change</button>
      <button onClick={() => foo(3, 'hello world')}>Call Foo</button>
      <input type="text" onChange={test} />
      <Child users={users} />
    </div>
  )
}
