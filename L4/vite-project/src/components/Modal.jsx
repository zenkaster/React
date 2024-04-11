import React from 'react'
import './Modal.css'

export default function Modal({ login, mail, pass, setShowModal }) {
    console.log(typeof pass);
    return (
        <div className="modal-wrapper" onClick={() => setShowModal(false)}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
                <span>{login}</span>
                <span>{mail}</span>
                <span>{"*".repeat(pass)}</span>
            </div>
        </div>
    )
}
