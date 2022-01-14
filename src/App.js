import React ,{useState} from 'react';
import { Child } from './Components/Child';
import ClassComponent from './Components/ClassComponent';
import { Js } from './Components/javaScript';
import ParentComp from './Components/Ref';
import FriendStatus from './Components/UseEffect';
import { Link } from 'react-router-dom'
import { Portal } from './Components/Portal';
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'
import FunctionalComponent from './Components/FunctionalComponent';
import './App.css'
import SimpleSlider from './Components/Slider';
import react from 'react';
import Context from './Components/Context';
import Counter from './Components/Reducer';
import CounterTwo from './Components/ReducerObject';
import {Embed ,Example} from './Components/Embed';


export const user = React.createContext();


function App() {
  const [text , setText] = useState("hello world !")
  let value = [1,2,4,6];
  const number = (number,val)=>{
    console.log(`${number}: value ${val}`)
  }
  // const name = () => {
  //   return 'ayyan'
  // }
  // const props = {first :'ayan' , last :'amir' , name :name()}
  // const props = {text :text , setText :setText}

  const someChane = (text)=>{
    setText(text)
  }
  return (
    <div className="App">
      {/* {
        value.map((item , i)=>{
          return <Child count = {item} itemName={i} key={i} muFunc={number}/>
        })
      } */}
      {/* <Js /> */}
        {/* <h1>Ayan</h1>
        <ParentComp /> */}
        {/* <ClassComponent />
        <Link to='/Ref/ayan'>Link</Link> */}

        {/* <FunctionalComponent {...props}/> */}
        {/* <FunctionalComponent text={text} setText={someChane}/> */}
       {/* <SimpleSlider /> */}
        {/* <FriendStatus /> */}
        {/* <Portal /> */}
        {/* <ClickCounter /> */}
        {/* <HoverCounter /> */}
        {/* <user.Provider value ='ayan'>
            <Context />
        </user.Provider> */}
		{/* <Counter /> */}
		{/* <CounterTwo /> */}
    {/* <Embed  /> */}
    {/* <Example  /> */}

    </div>
  );
}

export default App;
