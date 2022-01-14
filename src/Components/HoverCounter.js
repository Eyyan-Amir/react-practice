import React , {Component} from 'react'
// import HOC from './HOC'
import {clickFunction} from './helper/helper'

class HoverCounter extends Component{
  
    render(){
        const {count , increment} = this.props
        return(
            <>
                <div onClick={()=>clickFunction('val')} onMouseEnter ={increment}>hover {count} times</div>
            </>
        )
    }
}
export default HoverCounter
// export default HOC(HoverCounter)
