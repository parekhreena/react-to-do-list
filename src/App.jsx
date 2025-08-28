import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([
        'Go to the gym Reena',
        'Create 1 react exercise',
        'Focus on being balanced'
    ]);

    function addTodo(newTodo) {
        setTodos(prevTodos => [...prevTodos, newTodo])
    }

    function deleteTodo(index) {
        const newTodoList = todos.filter((todo, todoIndex) => {
            return todoIndex !== index
        })
        setTodos(newTodoList)
    }

    function editTodo(editedIndex, newText) {
        const newTodoList = todos.map((todo, index) => (
            (index === editedIndex) ? newText : todo
        ));

        setTodos(newTodoList);
    }

    return (
        <>
            <TodoInput addTodo = {addTodo} />
            <TodoList todos = {todos} editTodo={editTodo} deleteTodo={deleteTodo}/>
        </>
    )
}

export default App;
