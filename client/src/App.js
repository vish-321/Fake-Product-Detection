import React , {Fragment} from 'react';
import './App.css';
import DisplayList from "./components/listscans";
import EnterButton from "./components/username";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        
    
    {/* <Fragment>
     
      <div className ="container">
          <EnterButton/> 
           <DisplayList/> 
      </div>
      
    </Fragment>  */}

    <Route path="/pumashoes/:id" exact component={EnterButton} />
    <Route path="/display/"  component={DisplayList} />
    </Router>
  );
}



export default App;
