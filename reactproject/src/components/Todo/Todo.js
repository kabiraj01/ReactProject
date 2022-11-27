import {useContext, useReducer, useRef} from 'react';
import { TodoContext } from '../../context/TodoContext';
import TodoList from './TodoList';

function Todo() {
    const todoRef = useRef()
    const {addTodo} = useContext(TodoContext)

    const handleAddTodo = () =>{
        addTodo(todoRef.current.value)
        todoRef.current.value=''
    }

    return (
        <>
            <input placeholder='Add new todo' ref={todoRef} />
            <button onClick={handleAddTodo}>Add Todo</button>
            <TodoList />
        </>
    )
}

export default Todo;