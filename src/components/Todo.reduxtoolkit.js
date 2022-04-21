import {useDispatch, useSelector} from "react-redux";
import {
    addTodoRedux,
    completeTodoRedux,
    removeTodoRedux, thuncFetchUsers,
} from "../storeRedux/slices/todoSlise";
import React, {useRef, useState} from "react";

const TodoReduxtoolkit = () => {
    const [stateTodo, setStateTodo] = useState('');
    const todos = useSelector((state) => state.todo.todos)
    const dispatch = useDispatch();
    const inputRef = useRef();
    const addTodo = () => {
        const req = {id: Date.now(), title: stateTodo, completed: false};
        dispatch(addTodoRedux({todo: req}));
    }
    const addTodoRef = () => {
        const req = {id: Date.now(), title: inputRef.current.value, completed: false};
        dispatch(addTodoRedux({todo: req}));
    }
    return (

        <>
            <h3>Todo Redux</h3>
            <div><button onClick={()=>dispatch(thuncFetchUsers())}>fetch todo</button></div>
            <div><input type='text' onChange={e => setStateTodo(e.target.value)} placeholder={'Write text'}
                        value={stateTodo}
                        name="todo"/>
                <button onClick={addTodo}>add todo</button>
            </div>
            <div><input type='text' ref={inputRef} placeholder={'Write text'}/>
                <button onClick={addTodoRef}>add todo ref</button>
            </div>
            {todos.map(t =>
                <div key={t.id}>
                    <input type='checkbox' onChange={() => dispatch(completeTodoRedux({id: t.id}))}
                           checked={t.completed}/>
                    {t.title}
                    <button onClick={() => dispatch(removeTodoRedux({id: t.id}))}>x</button>
                </div>
            )}

        </>

    )
}

export {TodoReduxtoolkit}