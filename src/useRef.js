//useRef 贯穿一个组件示例代码

import React from 'react';
import { ReactDOM, render } from 'react-dom';
const rootElement=document.getElementById('root');

function App(){
    const nRef=React.useRef(0)  //Ref{current:0}
    console.log=()=>setTimeout(()=>console.log(`n:${nRef.current}`),1000)
   const update=React.useState(null)[1]
    return (
        <div className='App'>
            <p> {nRef.current}这里并不能实时更新 </p>
//React不能实时更新因为React认为不够函数式！解决方法：手动触发更新，React没有自己造一个！
            <p>
                <button onClick={ () => {nRef.current +=1;update(nRef.current)}}> +1 </button>
                <button onClick={log}>log</button>
            </p>
        </div>
    )
}

ReactDOM.render(<App />, rootElement); 
