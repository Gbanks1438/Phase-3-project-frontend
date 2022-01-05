import { useState } from 'react';
import ReservationCard from './ReservationCard';

function Reservations({reservations}) {
    // console.log("reservations: ", reservations)

    const [hotel_id, setHotel_id] = useState("1");
    const [guest_id, setGuest_id] = useState("");
    const [room_id, setRoom_id] = useState("");
    const [date_start, setDate_start] = useState("");
    const [date_end, setDate_end] = useState("");
    // const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();
        const newReservation = { hotel_id, guest_id, room_id, date_start, date_end };
        // console.log(newReservation)

        // setIsPending(true);

        fetch("http://localhost:9292/reservations", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newReservation)
        }).then(() => {
            console.log("Your reservation has been confirmed!");
            // setIsPending(false);
        })
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
                        aReservation={eachReservation} // For Us
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
                    <form onSubmit={handleSubmit}>
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