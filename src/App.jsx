import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Articles from './pages/Blog-home';
import ContactPage from './pages/Contact';
import Home from './pages/Home';




const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog' exact component={Articles} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='/contact' exact component={ContactPage} />
        
      </Switch>
    </div>
  );
};

export default App;
