import React from 'react'

function DisplayErrors(props) {
    return (
        <div>
            <p style={{color:'purple'}}> {props.children} </p>
        </div>
    )
}

export default DisplayErrors
