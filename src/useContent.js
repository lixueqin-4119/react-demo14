//useContext贯穿所有组件示例代码

import React from 'react';
import { ReactDOM, render } from 'react-dom';
const rootElement=document.getElementById('root');

const themeContent=React.createContext(null)//初始化上下文themeContent(全局变量)

function App(){
    const [theme,setTheme]=React.useState("red")
    return (
      <themeContent.Provider value={  {theme, setTheme}  }>//Provider意思是指明全局变量作用域。只有这里面的组件可以用theme。
          //对全局变量进行一次赋值，它的值就是一个对象。包含theme,和setTheme两个属性。
      <div className={`App ${theme}`}>
            <p> {theme}</p>
            <div>
                <ChildA />
            </div>
            <div>
                <ChildB />
            </div>
        </div>
        </themeContent.Provider>
    )
}

function ChildA(){
    const {setTheme}=React.useContext(themeContent)//从全局变量themeContent读取setTheme，字组件调用最上面的全局变量。
    return (
        <div>
            <button onClick={()=>setTheme("red")}> red </button>
        </div>
    )
}

function ChildB(){
    const {setTheme}=React.useContext(themeContent)//从全局变量themeContent读取setTheme，字组件调用最上面的全局变量。
    return (
        <div>
            <button onClick={()=>setTheme("blue")}> blue </button>
        </div>
    )
}

ReactDOM.render(<App />, rootElement); 