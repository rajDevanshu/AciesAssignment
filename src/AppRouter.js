import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //BrowserRouter as 
//containers
import Home from './Container/Home';
import Main from './Container/Main'
     
function AppRouter() {  
return (
    <Router>  
      <Switch>     
        <Route exact path='/' component={Home} />
        <Route exact path='/Dashboard' component={Main} />
      </Switch>    
    </Router>
  );
}

export default AppRouter;
