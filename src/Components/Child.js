import React,{useState,useEffect} from 'react';

export function Child ({count,itemName,muFunc}) {
    const [number, setnumber] = useState(count);
    useEffect(() => {
        muFunc(itemName,number);
    }, [number]);
    const makeCount = {
        add: () => setnumber(number + 1),
        discount: () => setnumber(number - 1)
   }

    // Send this number to parent ??
    return(
        <>
            <h3>{itemName}</h3>
            <button onClick ={makeCount.discount}>decrement</button>
            <input value={number} onChange={(e)=>setnumber(e.target.value)} />
            <button onClick ={makeCount.add}>Increment</button>
            <br/>
        
        </>
    )  
}