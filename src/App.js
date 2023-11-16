// import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  RouterProvider
} from "react-router-dom";

import Login from './screens/Login';
import  '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap-dark-5/dist/js/darkmode.js';
import '../node_modules/bootstrap-dark-5/dist/js/darkmode.min.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login/>} />


        </Routes>
      </div>

    </Router>

  );
}

export default App;
