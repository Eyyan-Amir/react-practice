import React , {Component} from 'react'

export default class ClassComponent extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            count : 0
        }
    }
    // render first 
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
        console.log('didMount')

    }
    // render after update
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
        console.log('didUpdate')

    }
    componentWillUnmount() {
        console.log('unmount')
    }
    titleInc = () =>{
        // this.Styling();
        this.setState({count : this.state.count + 1})
    }
    Styling = () =>{
        document.getElementById('styling').style.color = "red"
    }
    
    render(){
        return(
            <>
            <div id = 'styling'>{`this is count : ${this.state.count}`}</div>
            <button onClick = { () => { this.titleInc() ; this.Styling()}}>Trigger</button>
            </>
        )
    }
}