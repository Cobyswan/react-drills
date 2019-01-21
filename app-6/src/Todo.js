import React from 'react'

function Todo(props){
    const display = props.list.map((e) => {
        return <h2>{e}</h2>
    })
    
    return (
        <div>
            {display}
        </div>
    )
}

export default Todo