import React from 'react'

import { UsersType } from '../App';

interface ChildProps {
    users: UsersType[]
}


const Child: React.FC<ChildProps> = ({ users }) => {
    console.log(users);


    return (
        <div></div>
    )
}


export default Child;