import React, {useState} from 'react';
import '../App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../storeRedux/slices/counterSlise";

const CounterReduxtoolkit = ()=>{
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <div className='counter'>
            <div>
                {'Count = ' + count}
            </div>
            <div>
                <button className='btn' onClick={() => dispatch(increment())}>+</button>
                <button className='btn' onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    )
}

export  {CounterReduxtoolkit}