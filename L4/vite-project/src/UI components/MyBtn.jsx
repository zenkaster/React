import React from 'react'
import './MyBtn.css'

export default function MyBtn({ func, text, src }) {

    return (
        <button onClick={func} className='defaultBtn'>
            <img src={src} alt="#" />
            <span>{text}</span>
        </button>
    )
}
