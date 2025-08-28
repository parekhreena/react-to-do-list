import { useState } from "react";

export default function TodoCard(props) {
    const {todo, editTodo, deleteTodo, todoIndex} = props;
    const [ checked, setChecked ] = useState(false);
    const [ editMode, setEditMode ] = useState(false); 
    const [ editText, setEditText ] = useState(todo);

    function updateEditMode() {
        if (editMode) {
            editTodo(todoIndex, editText)
        }
        setEditMode(prev => !prev);
    }

    function saveEditedTodo(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            updateEditMode();
        }
    }
    return (
        <li className='todoItem'>
            <input type="checkbox" 
                id={todoIndex} 
                checked={checked}
                onChange={((e) => setChecked(e.target.checked))}
            />
            {
                editMode ? 
                    <input 
                        type = "text" 
                        id = {`todo-${todoIndex}`} 
                        value = {editText} 
                        onChange = {(e)=>setEditText(e.target.value)} 
                        onKeyDown = {saveEditedTodo}
                />
                :
                <label 
                    id = {`todo-${todoIndex}`} 
                    htmlFor = {`todo-${todoIndex}`}
                    style = {{textDecoration: checked ? "line-through": "none"}}    
                >
                    {todo}
                </label>
            }
            
            
            <span className="actionsContainer">
                <button className="editButton" onClick={updateEditMode}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="deleteButton" onClick={()=>{deleteTodo(todoIndex)}}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </span>
        </li>
    )
}