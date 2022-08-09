import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Information from './components/Information/Information';



function App() {
   return (
     
     <div >
       <Header></Header>
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
