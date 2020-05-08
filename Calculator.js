import React, {useReducer, useState} from 'react'


// STYLES
const buttonC = {
    width: 100,
    height: 50,
    margin: 5,
    fontSize: 20
}

const buttonD = {
    margin: 5,
    width: 156,
    height: 50,
    fontSize: 20
}

const resultPane = {
   color: 'black',
   fontSize: 50,
}

const buttonE = {
    width: 73,
    height: 50,
    margin: 5,
    fontSize: 25
}

const buttonF = {
    width: 156,
    height: 50,
    fontSize: 25,
    margin: 5
}

const typePane = {
    color: 'gray',
    backgroundColor: "#E1E1E1",
}

const fullPane = {
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWdith: 5
}

// FUNCTIONS

const initialState = 0

const reducer = (state, action) => {
    switch(action){
        case 'one':
            if(state === 0){
                return state = 1
            }
            return state + '1'
        case 'two':
            if(state === 0){
                return state = 2
            }
            return state + '2'
        case 'three':
            if(state === 0){
                return state = 3
            }
            return state + '3'
        case 'four':
            if(state === 0){
                return state = 4
            }
            return state + '4'
        case 'five':
            if(state === 0){
                return state = 5
            }
            return state + '5' 
        case 'six':
            if(state === 0){
                return state = 6
            }
            return state + '6'
        case 'seven':
            if(state === 0){
                return state = 7
            }
            return state + '7'
        case 'eight':
            if(state === 0){
                return state = 8
            }
            return state + '8'
        case 'nine':
            if(state === 0){
                return state = 9
            }
            return state + '9'  
        case 'zero':
            if(state === 0){
                return state = 0
            }
            return state + '0'
        case 'clear':
            return state = 0
        case 'back':
            if(state.length === 1){
               return state = 0
            }else{
                if(state !== 0){
                    return state.substring(0, state.length - 1);
                }
            }
          
        default:
            return state
    }
}



function Calculator() {

    // USESTATE HOOK
    const [count, dispatch] = useReducer(reducer, initialState)
    const [total, setTotal] = useState(initialState)
    const [method, setMethod] = useState('')

    // ACTION BUTTONS
    const plusButton = () => {
        if(method === '-'){
            setTotal(total - Number(count))
        }else if(method === '*'){
            setTotal(total * Number(count))
        }else if(method === '/'){
            setTotal(total / Number(count))
        }else{
            setTotal(total + Number(count))
        }
        setMethod('+')
        dispatch('clear')
    }
    const minusButton = () => {
        if(total !== 0){
            if(method === '+'){
                setTotal(total + Number(count))
            }else if(method === '*'){
                setTotal(total * Number(count))
            }else if(method === '/'){
                setTotal(total / Number(count))
            }else{
                setTotal(total - Number(count))
            }
        }else{
            setTotal(total + Number(count))
        }
        setMethod('-')
        dispatch('clear')
    }
    const multiButton = () => {
        if(method === '+'){
            setTotal(total + Number(count))
        }else if(method === '-'){
            setTotal(total - Number(count))
        }else if(method === '/'){
            setTotal(total / Number(count))
        }else{
            if(total !== 0){
                setTotal(total * Number(count))
            }else{
                setTotal(count)
            }
        }
        setMethod('*')
        dispatch('clear')
    }
    const divideButton = () => {
        if(Number(count) === 0 && total === 0){
            alert('Invalid Operator')
        }else{
            if(method === '+'){
                setTotal(total + Number(count))
            }else if(method === '-'){
                setTotal(total - Number(count))
            }else if(method === '*'){
                setTotal(total * Number(count))
            }else{
                if(total !== 0){
                    setTotal(total / Number(count))
                }else{
                    setTotal(count)
                }
            }
            setMethod('/')
        }
        
        dispatch('clear')
    }
    const clearButton = () =>{
        dispatch('clear')
        setTotal(0)
        setMethod('')
        console.log('dispatch cleared')
    }
    const equalButton = () => {
        if(method === '+'){
            setTotal(total + Number(count))
        }else if(method === '-'){
            setTotal(total - Number(count))
        }else if(method === '*'){
            setTotal(total * Number(count))
        }else if(method === '/'){
            setTotal(total / Number(count))
        }
        dispatch('clear')
        setMethod('')
    }

    const backSpaceButton = () =>{
        dispatch('back')
    }

    return (
        <div style={fullPane}>
            <h1>Calculator</h1>
            <h2 style={resultPane}>{total}</h2>
            <h2 style={typePane}>{count}</h2>
            <div>
                <button style={buttonC} onClick={() => dispatch('one')}>1</button>
                <button style={buttonC} onClick={() => dispatch('two')}>2</button>
                <button style={buttonC} onClick={() => dispatch('three')}>3</button>
            </div>
            <div>
                <button style={buttonC} onClick={() => dispatch('four')}>4</button>
                <button style={buttonC} onClick={() => dispatch('five')}>5</button>
                <button style={buttonC} onClick={() => dispatch('six')}>6</button>
            </div>
            <div>
                <button style={buttonC} onClick={() => dispatch('seven')}>7</button>
                <button style={buttonC} onClick={() => dispatch('eight')}>8</button>
                <button style={buttonC} onClick={() => dispatch('nine')}>9</button>
            </div>
            <div>
                <button style={buttonD} onClick={() => dispatch('zero')}>0</button>
                <button style={buttonD} onClick={clearButton}>Clear</button>
            </div>
            <div>
                <button style={buttonE} onClick={plusButton}>+</button>
                <button style={buttonE} onClick={minusButton}>-</button>
                <button style={buttonE} onClick={multiButton}>x</button>
                <button style={buttonE} onClick={divideButton}>/</button>
            </div>
            <div>
                <button style={buttonF} onClick={backSpaceButton}>{'<'}</button>
                <button style={buttonF} onClick={equalButton}>=</button>
            </div>
            <small style={{color: 'gray'}}>Written in JavaScript by Thirasha Praween</small>
        </div>
    )
}

export default Calculator
