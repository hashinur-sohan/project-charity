import { useEffect, useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import Home from './components/Home/Home';
import ScholarSchedule from './components/ScholarSchedule/ScholarSchedule';
import Donation from './components/Donation/Doantion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';





function App() {
   return (
     <div className='App'>
      {<Header></Header>}
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/information" element={<Information/>} />
        <Route path="/scholar_schedule" element={<ScholarSchedule/>}/>
        <Route path="/donation" element={<Donation/>}/>
      </Routes>
      {<Footer></Footer>}
       
       
       
     </div>
  );
};
// function Schedule(){
//   const [scholar, setSchedule] = useState([]);
//   useEffect( () =>{
//     fetch('https://limitless-lowlands-32082.herokuapp.com/schedule')
//     .then(res=>res.json())
//     .then(data => console.log(data))
//   }, [])
//   return(
//     <div><h5>aaaaaaaaaaaaaaaaa </h5></div>
//  )
// };

export default App;
