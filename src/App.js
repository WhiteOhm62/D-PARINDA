import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import MainPage from './components/MainPage';
import Postal from './components/Postal';
import Shop from './components/Shop/Shop';
import Payment from './components/Shop/Payment';
import { Switch } from 'react-router-dom';


function App() {
  return (
    <>
     <Router>
      <Switch>
        <Route path="/" element={<Login />}>
          <Route index element={<MainPage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Main" element={<MainPage />} />    
          <Route path="/Code" element={<Postal />} />      
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
