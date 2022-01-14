import React from 'react'
import HOC from './HOC'
import {clickFunction} from './helper/helper'

function ClickCounter({count , increment}){
    return(
        <>
            <div onClick={()=>clickFunction('2')}>Click {count} times</div>
            <button onClick ={increment}>Button</button>
        </>
    )
}
export default HOC(ClickCounter)
