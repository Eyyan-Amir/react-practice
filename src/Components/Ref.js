import React, { Component } from 'react';
import RefChild from './RefChild';

export default class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null;
        this.setCbRef = ( element ) => {
            console.log(element)
            this.cbRef = element
        }
    }
    componentDidMount(){
        console.log('test')
        // this.inputRef.current.focus();
        if(this.cbRef){
            this.cbRef.focus();
        }
    }
    handleRef = () =>{
        let result = this.inputRef.current.value;
        // alert(result);
        document.getElementById("name").innerText = result
    }
    enterHandleRef = (event) => {
        if(event.which == 13){
            let result = this.inputRef.current.value;
            document.getElementById("name").innerText = result
        }
    }
    refrence = () => {

    }
    render(){
            let id = this.props;
            let testing = this.props.match.params.id;
            console.log(id)
        return(
            <div>
                <h2>{testing}</h2>
                <h1 id="name"></h1>
                <RefChild ref ={this.inputRef} />
                {/* <input type="text" ref={this.inputRef} onKeyDown={this.enterHandleRef} />
                <input type="text" ref={this.setCbRef}/> */}
                <button onClick={this.handleRef}>Button</button>
            </div>
        )
    }
}
