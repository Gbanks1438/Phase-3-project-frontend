import './App.css';
import { Route, Routes } from "react-router-dom"; //Navigate
// import { useEffect, useState } from 'react';

import Header from './Components/Header';
import About from './Components/About';
import Reservations from './Components/Reservations';
import Rooms from './Components/Rooms';
import AroundTown from './Components/AroundTown.js';

function App() {
  // const [ reservations, setReservations ] = useState( [] )
  // console.log("Our Reservations ->", reservations)

  // useEffect( 
  //   ()=>{
                //// fetch example from instructions
                    //// fetch("http://localhost:9292/test")
                    //// .then((r) => r.json())
                    //// .then((data) => console.log(data));

  //     fetch("http://localhost:8888/reservations")
  //     .then( r => r.json() )
  //     .then( 

  //       (fetchedReservationsArray)=>{ console.log("fetchedReservationsArray: ", fetchedReservationsArray) 

  //         setReservations( [ ...fetchedReservationsArray ]  )

  //       }
        
  //     )

  //   }
  
  // , [] )

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/around_town' element={<AroundTown />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/reservations' element={<Reservations />} />     
      </Routes>
      
     {/* {
       reservations.map( 
         (eachReservation)=>{
           return( <Reservations 
            key={eachReservation.id} // For React  🤖
            reservationsProp={eachReservations} // For Us  :)
            /> )
          }
          )
        } */}
    </div>
  );
}

export default App;