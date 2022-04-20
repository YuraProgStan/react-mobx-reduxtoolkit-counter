import './App.css';
import {CounterMobx} from './Counter.mobx';
import {CounterUseState} from "./Counter.usestate";
import {TodoMobx} from "./Todo.mobx";
import {CounterReduxtoolkit} from "./Counter.reduxtoolkit";



const App =() => {
    return (
        <div className="app">
            <CounterMobx />
            <CounterUseState />
            <CounterReduxtoolkit />

            <TodoMobx />
        </div>
    );
}

export default App;
