/* 使用两个useState,如何让两个 useState 不冲突 */
import React from 'react';
import { ReactDOM, render } from 'react-dom';
const rootElement=document.getElementById('root');

let _state =[]
let index=0
const myUseState=(initialValue)=>{
    const currentIndex=index //重要
    _state[currentIndex]= _state[currentIndex] === undefined ? initialValue : _state[currentIndex];
    const setState=(newValue)=>{ 
         _state[currentIndex]=newValue
         console.log(_state);
         render()
    }
    index +=1
    return [_state[currentIndex],setState]
}

const render=()=>{
    index=0 //核心
    ReactDOM.render(<App />, rootElement); 
}

function App(){
    const [n,setN]=myUseState(0)
    const [m,setM]=myUseState(0)
    return (
        <div className='App'>
            <p> {n} </p>
            <p>
                <button onClick={ () => setN(n + 1)}> +1 </button>
            </p>
            <p> {m} </p>
            <p>
                <button onClick={ () => setM(m + 1)}> +1 </button>
            </p>
        </div>
    )
}

ReactDOM.render(<App />, rootElement); 
