import React , {useReducer} from 'react';

let initialState = {
    firstCounter : 0,
    secondCounter : 10
}

const reducer = (state , action) =>{
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter : state.firstCounter + action.value}
            break;
        case 'decrement':
            return { ...state, firstCounter : state.firstCounter - action.value}
            break;
            case 'increment2':
                return { ...state, secondCounter : state.secondCounter + action.value}
                break;
            case 'decrement2':
                return { ...state, secondCounter : state.secondCounter - action.value}
                break;
        case 'reset':
            return initialState
            break;
    
        default:
            return state.firstCounter
            break;
    }
}

const CounterTwo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
    <div>
        counter - {state.firstCounter}
        <br/>
        <button onClick={()=>dispatch({type : 'increment' , value : 5})}>Increment</button>
        <button onClick={()=>dispatch({type : 'decrement', value : 5})}>Decrement</button>
        <button onClick={()=>dispatch({type : 'reset'})}>Reset</button>
        <br/>
        counter - {state.secondCounter}
        <br/>
        <button onClick={()=>dispatch({type : 'increment2' , value : 5})}>Increment</button>
        <button onClick={()=>dispatch({type : 'decrement2', value : 5})}>Decrement</button>
        <button onClick={()=>dispatch({type : 'reset'})}>Reset</button>
    </div>
    )
}

export default CounterTwo;