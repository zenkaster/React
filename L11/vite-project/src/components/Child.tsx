import React from 'react'

import { UsersType } from '../App'

export default function Child({ check: Array<UsersType> }) {

    return (
        <div>{check}</div>
    )
}
