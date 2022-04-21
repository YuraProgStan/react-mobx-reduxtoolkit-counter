import React, {useRef, useState} from "react";
import '../App.css';
import {todo} from '../store/todo'
import {observer} from 'mobx-react-lite';

const TodoMobx = observer(()=>{
    const [stateTodo, setStateTodo] = useState('');
    const inputRef = useRef();
    const addTodo = () =>{
        const req = {id: Date.now(),title:stateTodo, completed: false};
          todo.addTodo( req);
    }
    const addTodoRef = () =>{
        const req = {id: Date.now(),title:inputRef.current.value, completed: false};
        todo.addTodo( req);
    }

    return(
        <div>
            <h3>Todo Mobx</h3>
            <div key = {Date.now()}><button onClick={()=>todo.fetchTodos()}>fetch todo</button></div>
            <div>
            <input type="text" onChange={e =>setStateTodo(e.target.value)} value={stateTodo} placeholder = "Write text" name='todos' />
            <button onClick={addTodo}>add todo</button>
            </div>
            <div>
            <input type="text" ref={inputRef} placeholder = "Write text" name='todosRef' />
            <button onClick={addTodoRef}>add todo ref</button>
            </div>
            {todo.todos.map(t =>
            <div className='todo' key = {t.id}>
                <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)}/>
                {t.title}
                <button onClick={() => todo.removeTodo(t.id)}>x</button>
            </div>)}
        </div>
    )
})

export  {TodoMobx}