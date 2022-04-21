import React from "react";
import '../App.css';
import {counter} from '../store/counter'
import {observer} from 'mobx-react-lite';

const CounterMobx = observer(()=>{
    return(
        <div className='counter'>
            <div>
            {'Count = ' + counter.count}
            </div>
            <div>
                <button className='btn' onClick={() => counter.increment()}>+</button>
                <button className='btn' onClick={() => counter.decrement()}>-</button>
            </div>
        </div>
    )
})

export  {CounterMobx}