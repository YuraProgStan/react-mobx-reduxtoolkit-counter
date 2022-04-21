import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {id: Date.now(), title: 'Учись', completed: false},
        {id: Date.now()+1, title: 'Работай', completed: false},
        {id: Date.now()+2, title: 'Отдыхай', completed: false}
    ],
}
// export const thuncFetchUsers = () => async (dispatch) => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//     console.log(response);
//     dispatch(fetchTodoRedux(response.data))
// }
export const thuncFetchUsers = createAsyncThunk(
    'todoSlice/ fetchTodoRedux',
    async (_,{dispatch}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        dispatch(fetchTodoRedux(data))
    }
)

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodoRedux: (state, action) => {
            const {todo} = action.payload
            state.todos.push(todo);
        },
        removeTodoRedux: (state, action) => {
            const {id} = action.payload
            state.todos = state.todos.filter(t => t.id !== id);
        },
        completeTodoRedux: (state, action) => {
            const {id} = action.payload
            const findIndex = state.todos.findIndex(t => t.id === id);
            state.todos[findIndex].completed = !state.todos[findIndex].completed;
        },
        fetchTodoRedux(state, action) {
             state.todos = [...state.todos, ...action.payload]

        }
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

export const {addTodoRedux, removeTodoRedux, completeTodoRedux, fetchTodoRedux} = todoSlice.actions

export default todoSlice.reducer