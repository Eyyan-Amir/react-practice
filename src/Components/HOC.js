// import React , { Component} from 'react'

// const HOC = (WrappedComponent) => {
//     class NewComponent extends Component{
//         constructor(props) {
//             super(props)
        
//             this.state = {
//                 count : 0
//             }
//         }
//         increment = () =>{
//         this.setState({count : this.state.count + 1})
//         } 
//         render(){
//             return <WrappedComponent count = {this.state.count} increment = {this.increment} />
//         }
//     }
//     return NewComponent
// }
// export default HOC

import React , { useState } from 'react'

const HOC = (WrappedComponent) => {
    const NewComponent = () => {
        const [count , setCount] = useState(0);

        const increment = () =>{
            setCount(count + 1)
        }
        return <WrappedComponent count = {count} setCount = {setCount} increment = {increment}/>
    //{...this.props} is important when u use HOC 
    //the props from app.js come in HOC component and then go to desire component with use of {...this.props}
    }
    return NewComponent
}
export default HOC