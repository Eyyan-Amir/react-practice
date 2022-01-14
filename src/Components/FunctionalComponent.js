import React from 'react';
import ReactDOM from 'react-dom';

const FunctionalComponent = ({text , setText}) => {
    
    const fullName = () => {
        // return `${first} ${last}`
    }
    const changeState = () =>{
        return <h1>{text}</h1>
    }
    const tick = () => {
        let el = (
            <>
                <h1>Hi ayan</h1>
                <h2>you are &lt; old</h2>
                <h2>its {new Date().toLocaleTimeString()}</h2>
            </>
        )
        // {ReactDOM.render(el,document.getElementById('root'))}
    }
    // let name = {
    //     first:'ayan',
    //     last:'amir'
    // }
    const element = <h1>hi</h1>
    return <>
            <h1>Functional Component</h1>
            <button onClick={()=>setText('Heloooo')}>click me</button>
            <br/>
            <br/>
            {text}
    {/* {ReactDOM.render(element,document.getElementById('root'))} */}
            {/* <h1>{fullName(name)}</h1> */}
            {/* <h1>{first}</h1> */}
            {/* {setInterval(tick, 1000)} */}

        </>;
}

export default FunctionalComponent;