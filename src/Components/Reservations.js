import ReservationCard from './ReservationCard.js';

function Reservations({reservations}) {
    console.log("reservations: ", reservations)

    // const handleSubmit = (e) => {

    //     // e.preventDefault();
    //     const newReservation = { hotel_id, guest_id, room_id, date_start, date_end };

    //     setIsPending(true);

    //     fetch("http://localhost:9292/reservations", {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json"},
    //         body: JSON.stringify(newReservation)
    //     }).then(() => {
    //         console.log("Your reservation has been confirmed!");
    //         setIsPending(false);
    //     })
    //  }

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
                     }   )
                }
            </div>  
        <h2>Make A Reservation</h2>
            <br/>
                <div>
                    <form>
                    {/* add to form tag above --> onSubmit={handleSubmit} */}
                        <label>Hotel:</label>
                        <input
                            type="text"
                            required
                            value="1"
                            // {eachReservation.hotel_id}
                            // onChange={(e) => setHotel_id(e.target.value)}
                        />
                    <br/>
                        <label>Member:</label>
                        <input
                            type="text"
                            required
                            value="5"
                            // {eachReservation.guest_id}
                            // onChange={(e) => setGuest_id(e.target.value)}
                        />
                    <br/>
                        <label>Room:</label>
                        <input
                            type="text"
                            required
                            value="2"
                            // {eachReservation.room_id}
                            // onChange={(e) => setRoom_id(e.target.value)}
                        />
                    <br/>
                        <label>Arriving:</label>
                        <input
                            type="text"
                            required
                            // value={eachReservation.date_start}
                            // onChange={(e) => setDate_start(e.target.value)}
                        />
                    <br/>
                        <label>Checking Out:</label>
                        <input
                            type="text"
                            required
                            // value={eachReservation.date_end}
                            // onChange={(e) => setDate_end(e.target.value)}
                        />
                    <br/>
                        <input type="submit" value="Submit"/>
                        {/* { !isPending &&<button>Submit</button>}
                        { isPending &&<button disabled>Confirming Reservation...</button>} */}
                    </form>
                </div>
            {/* );})} */}
        </div>
    );
}

export default Reservations;