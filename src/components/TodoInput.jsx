import { useState } from 'react';

export default function TodoInput(props) {
    const { addTodo } = props
    const [newTodo, setNewTodo] = useState('')
    return (
        <header>
            <input value={newTodo} onChange={(e)=>{setNewTodo(e.target.value)}} placeholder="Enter To do.." />
            <button onClick={()=>{
                addTodo(newTodo)
                setNewTodo('')
            }}>Add</button>
        </header>
    )
}