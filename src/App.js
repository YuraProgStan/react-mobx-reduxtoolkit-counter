import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainPage} from './pages/MainPage';
import {TodosPage} from "./pages/TodosPage";
import {CountersPage} from "./pages/CountersPage";




const App =() => {
    return (
        <div className="app">

<Routes>
    <Route path = {'/'} element = {<MainPage />} >
        <Route path = {'/counters'} element = {<CountersPage />} />
        <Route path = {'/todos'} element = {<TodosPage />} />
    </Route>
</Routes>


        </div>
    );
}

export default App;
