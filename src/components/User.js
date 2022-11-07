import React from 'react'

const User = ({name,id,password}) => {
    return (
        <ui>
            <li>
                <p>{name}</p>
                <h3>{id}</h3>
                <p>{password}</p>
            </li>
            <hr/>
        </ui>
    )
}

export default User
