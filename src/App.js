import './App.css';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

import Header from './Components/Header';
import About from './Components/About';
import Reservations from './Components/Reservations';
import ReservationCard from './Components/ReservationCard';
import Rooms from './Components/Rooms';
import RoomCard from './Components/RoomCard';
import AroundTown from './Components/AroundTown';

function App() {
  const [ rooms, setRooms ] = useState( [] )
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
  
    const [ reservations, setReservations ] = useState( [] )
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
    
    function cancelButtonClicked(eachReservation) {
      fetch("http://localhost:9292/reservations", 
      { method: "DELETE" })
      const filteredReservations = reservations.filter((aReservation) => {
        return eachReservation.id !== aReservation.id
      }
      )
      setReservations(filteredReservations);
      }

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/around_town' element={<AroundTown />} />
          <Route path='/rooms' element={<Rooms rooms={rooms}/>} />
          <Route path='/room_card' element={<RoomCard />} />
          <Route path='/reservations' element={<Reservations reservations={reservations}/>} />
          <Route path='/reservation_card' element={<ReservationCard cancelButtonClicked={cancelButtonClicked}/>} />     
      </Routes>
    </div>
  );
}

export default App;


    //// For use if we add a calendar component in the future
    // const removeReservation =(eachReservation)=>{  
    //   const removeCar = reservations.filter(
    //     (oneRes)=>{
    //       return eachReservation.id !== oneRes.id
    //     }
    //   )
    //   setReservations(removeRes)
    // }