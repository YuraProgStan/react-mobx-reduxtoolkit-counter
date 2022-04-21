import {CounterMobx} from '../components/Counter.mobx';
import {CounterUseState} from '../components/Counter.usestate';
import {CounterReduxtoolkit} from '../components/Counter.reduxtoolkit';

const CountersPage = () => {
    return (
        <>
            <h1>Counters Page</h1>
            <CounterMobx/>
            <CounterUseState/>
            <CounterReduxtoolkit/>
        </>
    )
}

export {CountersPage}