import TodoCard from "./TodoCard";

export default function TodoList(props) {
    const {todos, editTodo, deleteTodo} = props

    return (
        <>
            <ul className="main">
                {todos.map((todo, todoIndex) => {
                    return (
                        <TodoCard 
                            todo={todo} 
                            key={todoIndex} 
                            editTodo = {editTodo}
                            deleteTodo = {deleteTodo} 
                            todoIndex={todoIndex} 
                        />
                    )
                })}
            </ul>
        </>
    )
}
