import './App.css';

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
;
import Home from './Components/Home/Home';
import Wildberries from './Components/WbPage/WbPage';
import Avito from './Components/Avito/Avito';
import Profile from './Components/Profile/Profile';



const App = () => {
  return (
    <Router>
      
        
      
        <Routes>
          <Route path="/" exact element={ <Home/>} />
          <Route path="/wildberries" exact element={<Wildberries/>} />
          <Route path="/avito" exact element={<Avito /> }/>
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      
    </Router>
  );
};

export default App;
