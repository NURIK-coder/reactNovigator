import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Main from './page/HomePage';
import Contacts from './page/contacts';
import Error from './page/errorPage';
import Login from './page/login';
import Games from './page/Games';
import About from './page/aboutUs';
import Layout from './components/layout'
import Game from './page/game'
function App() {
//   const [time, setTime] = useState(new Date())

//   useEffect(()=>{
//     const timersetinterval = setInterval(()=>{
//     console.log('interval works');
//     setTime(new Date())
//     }, 1000)
//     return()=>{
//       clearInterval(timersetinterval);
        
//     }
// });
// axios.get().then(
//   (response) =>{
//     response.data
// }
// ).catch(
//   (err)=>{
//     err.response.code
//   }
// )
function changeTheme(){
  document.getElementById('root').classList.toggle('dark')
}
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route
        index
        element={<Main/>}
        />
        <Route
        path='/contacts'
        element={<Contacts/>}
        />
        <Route
        path='*'
        element={<Error/>}
        />
        <Route
        path='/about'
        element={<About/>}
        />
        <Route
        path='/games'
        element={<Games/>}
        />
        <Route
        path='/games/:id'
        element={<Game/>}
        />
      </Route>
  

      
    </Routes>
    </BrowserRouter>
    // <div className="text-red-500 dark:bg-black dark:text-white">
    //   <p>{time.toLocaleString()}</p>
    //   <button className="hover:bg-blue-500" onClick={changeTheme}>Dark Mode</button>
    // </div>

    
  );
}

export default App;
