import React, {useState} from 'react';
import '../App.css';

const CounterUseState = ()=>{
    const [state, setState] = useState(0)
    return(
        <div className='counter'>
            <div>
            {'Count = ' + state}
            </div>
            <div>
                <button className='btn' onClick={() => setState(state+1)}>+</button>
                <button className='btn' onClick={() => setState(state-1)}>-</button>
            </div>
        </div>
    )
}

export  {CounterUseState}