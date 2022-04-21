import {makeAutoObservable} from "mobx";

class Todo {
    todos = [
        {id: Date.now(), title: 'Учись', completed: false},
        {id: Date.now()+1, title: 'Работай', completed: false},
        {id: Date.now()+2, title: 'Отдыхай', completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
        // makeAutoObservable(this, {}, {deep:true}) //ставим deep true при вложенности в todos =[{id:1, title:{id:1, name:'ddafs'},completed: false},{id:2..}]
        // makeAutoObservable(this, {todos: observable, addTodo: action, computed})
        // //todos: observable - за каким полем следить, addTodo: action - какая функция будет action, computed - функция может являться вычисляемым значением
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }


    fetchTodos(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export const todo = new Todo()