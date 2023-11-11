import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Signup from './Signup';
import './Signup.css';
import { Route,Routes } from 'react-router-dom';
import Login from './Login.jsx';
import Home from './Home.jsx';

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    </>

    
  )
}

export default App