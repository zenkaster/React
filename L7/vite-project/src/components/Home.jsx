import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (counter >= 1) {
      // alert('Counter = 5, переходим на другой путь')
      console.log(counter);
      navigate(-1)
      // перекидывать на /about
    }
  }, [counter])



  return (
    <div>
      Home <br />
      {counter} <br />
      Когда Counter Будет равен 5, перекидывать на /about <br />
      <button onClick={() => setCounter(counter + 1)}>+</button>

    </div>
  )
}
