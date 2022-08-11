import { useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Information from './components/Information/Information';



function App() {
   return (
     
     <div >
      <Routes>
        <Route> path="/ element={<Header></Header>}"</Route>
        <Route> path="/ element={}" </Route>
        <Route> path="/ element={}" </Route>
        <Route> path="/ element={}" </Route>
      </Routes>
       
       <Information></Information>
       
       
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
