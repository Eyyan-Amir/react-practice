import React ,{useEffect, useState} from 'react';
export default function FriendStatus () {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
        return () => {
            console.log('cleanUp')
        }
    })
    return <>
        <div>the vale is : {count}</div>
        <button onClick = { ()=>setCount(count + 1)}>Button</button>
    </>
}
