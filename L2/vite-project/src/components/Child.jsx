import React from 'react'

export default function Child({ title, setStr }) {
    // const strFromParent = props.str
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={() => setStr('Мы изменили сообщение из Child.jsx')}>Change Text</button>
            {/* {strFromParent}
            {props.str} */}
        </div>
    )
}
