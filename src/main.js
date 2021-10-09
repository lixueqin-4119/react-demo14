import React from 'react';
import { ReactDOM } from 'react-dom';
const rootElement=document.getElementById('root');

function App(){
    const [n,setN]=React.useState(0)
    return (
        <div className='App'>
            <p> {n} </p>
            <p>
                <button onClick={ () => setN(n + 1)}> +1 </button>
            </p>
        </div>
    )
}

//const x = App()    
//console.log(x)

ReactDOM.render(<App />, rootElement); //App组件肯定会调用App函数
