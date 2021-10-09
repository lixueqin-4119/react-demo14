/* 初次实现useState */

import React from 'react';
import { ReactDOM, render } from 'react-dom';
const rootElement=document.getElementById('root');


let _state //全局变量不会被myUseState重置
const myUseState=(initialValue)=>{
    _state= _state === undefined ? initialValue : _state;
    const setState=(newValue)=>{ //state就是n
         _state=newValue
         render()
    }
    return [_state,setState]
}

const render=()=>{
    ReactDOM.render(<App />, rootElement); 
}

function App(){
    const [n,setN]=myUseState(0)
    return (
        <div className='App'>
            <p> {n} </p>
            <p>
                <button onClick={ () => setN(n + 1)}> +1 </button>
            </p>
        </div>
    )
}

ReactDOM.render(<App />, rootElement); 
