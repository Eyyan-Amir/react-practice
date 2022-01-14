import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ref from './Components/Ref'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Routing = () =>{
  return <Router>
    <Switch>
      <Route path='/' exact render={(routeProps) => <App {...routeProps} />} /> 
      {/* //render method // */}
      <Route path='/Ref/:id' exact render={(id)=> <Ref {...id} />} />
      {/* // component Method //  */}
    </Switch>
  </Router>
}
ReactDOM.render(
  <Routing />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
