import {TodoMobx} from '../components/Todo.mobx';
import {TodoReduxtoolkit} from "../components/Todo.reduxtoolkit";

const TodosPage = () => {
    return (
        <>
            <h1>Todos Page</h1>
            <TodoMobx/>
            <TodoReduxtoolkit/>
        </>
    )
}

export {TodosPage}