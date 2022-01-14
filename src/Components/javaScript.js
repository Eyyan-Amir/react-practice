import React, {useState} from 'react';

let array = [0 , 99 , 105 , -5];
let mins = array[0];
let minValue;

for(let i = 0 ; i <= array.length - 1 ; i++){
    let value = array[i]
    // minValue = (value < mins) ? value : mins
    if(mins < value){
        minValue = mins
    }else{
        minValue = array[i]
    }
}
// console.log("value is : " , minValue)
export function Js (){

    const [ name , setName] = useState('ayan')
    const check = () => {
        return(
            typeof {name : "ayan"} ,
            typeof "name"
            )
            
    }
    const print = () => {
        let prtContent = document.getElementById("hello");
        let WinPrint = window.open();
        WinPrint.document.write("prtContent.innerHTML");
        WinPrint.print();
        WinPrint.close();
    }
    return(
    <>
        {/* <div>{check()}</div> */}
        <div id="hello">
        <p >hello</p>
        </div>
        <button onClick ={print}>print</button>
        </>
    )
}
