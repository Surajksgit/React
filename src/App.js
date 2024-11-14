import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer'
import Login from './Login';
import Suraj from './Suraj';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import Home from './Main';
// import Home from './Login';
// import Home from './Name';
import Error from './error';


function App() {
  return (
    <>
   
   <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/main' element={<Main/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/name' element={<Suraj/>}/>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/error' element={<Error/>}/>
    <Route path='/*' element={<Navigate to='/error'/>}/>
    
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
