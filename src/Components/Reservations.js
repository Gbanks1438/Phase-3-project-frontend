import { useState } from 'react';
import ReservationCard from './ReservationCard';

function Reservations({reservations, setReservations}) {
    // console.log("reservations: ", reservations)

    const [hotel_id, setHotel_id] = useState("1");
    const [guest_id, setGuest_id] = useState("");
    const [room_id, setRoom_id] = useState("");
    const [date_start, setDate_start] = useState("");
    const [date_end, setDate_end] = useState("");
    // const [isPending, setIsPending] = useState(false);

    const submitButtonClicked = (e) => {

        e.preventDefault();
        const newReservation = { hotel_id, guest_id, room_id, date_start, date_end };

        // setIsPending(true);

        fetch("http://localhost:9292/reservations", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newReservation)
        }).then(() => {
            console.log("Your reservation has been confirmed!");
            setReservations([...reservations, newReservation])
            // setIsPending(false);
        })
    }
        // ,
     
     function cancelButtonClicked(reservation) {
         console.log(`http://localhost:9292/reservations/${reservation.id}`)
        fetch(`http://localhost:9292/reservations/${reservation.id}`,
            {
                method: "DELETE",
            })
            .then((r) => r.json())
            .then((data) => 
            setReservations(data)
            );
     }
    
      function updateButtonClicked(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/reservations/${e.id}`, {
         method: "PATCH",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
          hotel_id: hotel_id,
          guest_id: guest_id,
          room_id: room_id,
          date_start: date_start,
          date_end: date_end
          }),
       })
         .then((r) => r.json())
         .then((updatedReservation) => setReservations(updatedReservation));
     }

    return (
        <div className="div-text">
            <h2>Reservations List</h2>
            <br/>
            <div>
                {reservations.map((eachReservation)=>{
                     return ( 
                         <div> 
                     <ReservationCard
                        key={eachReservation.id} // For React
                        eachReservation={eachReservation} // For Us
                        cancelButtonClicked={cancelButtonClicked}
                        updateButtonClicked={updateButtonClicked}
                        />
                        </div>  
                        )
                      }   
                    )
                }
            </div>  
        <h2>Make A Reservation</h2>
            <br/>
                <div>
                    <form onSubmit={submitButtonClicked}>
                        <label>Hotel:</label>
                        <input
                            placeholder="1"
                            type="text"
                            required
                            value={hotel_id}
                            onChange={(e) => setHotel_id(e.target.value)}
                        />
                    <br/>
                        <label>Member:</label>
                        <input
                            placeholder="5"
                            type="text"
                            required
                            value={guest_id}
                            onChange={(e) => setGuest_id(e.target.value)}
                        /> 
                    <br/>
                        <label>Room:</label>
                        <input
                            placeholder="2"
                            type="text"
                            required
                            value={room_id}
                            onChange={(e) => setRoom_id(e.target.value)}
                        />
                    <br/>
                        <label>Arriving:</label>
                        <input
                            placeholder="MM/DD/YYYY"
                            type="text"
                            required
                            value={date_start}
                            onChange={(e) => setDate_start(e.target.value)}
                        />
                    <br/>
                        <label>Checking Out:</label>
                        <input
                            placeholder="MM/DD/YYYY"
                            type="text"
                            required
                            value={date_end}
                            onChange={(e) => setDate_end(e.target.value)}
                        />
                    <br/>
                        <input type="submit" value="Submit"/>
                        {/* { !isPending &&<button>Submit</button>}
                        { isPending &&<button disabled>Confirming Reservation...</button>} */}
                    </form>
                </div>
        </div>
    );
}

export default Reservations;