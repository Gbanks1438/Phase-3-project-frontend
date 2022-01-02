import './App.css';
import { Route, Routes } from "react-router-dom"; //Navigate
import { useEffect, useState } from 'react';

import Header from './Components/Header';
import About from './Components/About';
import Reservations from './Components/Reservations';
import Rooms from './Components/Rooms';
import AroundTown from './Components/AroundTown.js';

function App() {

  const [ rooms, setRooms ] = useState( [] )
  // console.log("Our Rooms ->", rooms)
    useEffect( 
      ()=>{        
        fetch("http://localhost:9292/rooms")
        .then( r => r.json() )
        .then( 
        (fetchedRoomsArray)=>{ console.log("fetchedRoomsArray: ", fetchedRoomsArray) 
        setRooms( [ ...fetchedRoomsArray ]  )
          }
        )
      }
    , [] )
  // console.log("Check Our Rooms Again->", rooms)

  const [ reservations, setReservations ] = useState( [] )
  // console.log("Our Reservations ->", reservations)
    useEffect( 
      ()=>{        
        fetch("http://localhost:9292/reservations")
        .then( r => r.json() )
        .then( 
        (fetchedReservationsArray)=>{ console.log("fetchedReservationsArray: ", fetchedReservationsArray) 
        setReservations( [ ...fetchedReservationsArray ]  )
          }
        )
      }
    , [] )
  // console.log("Check Our Reservations Again->", reservations)
  
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/around_town' element={<AroundTown />} />
          <Route path='/rooms' element={
          <Rooms 
          roomsList={rooms}
          />} />
          <Route path='/reservations' element={
          <Reservations 
          reservationsList={reservations}
          />} />     
      </Routes>

    </div>
  );
}

export default App;