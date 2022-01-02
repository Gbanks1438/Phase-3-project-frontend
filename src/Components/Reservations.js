function Reservations(props) {
    console.log("props: ", props)
  
    // const handleSubmit = (e) => {
    //     // e.preventDefault();
    //     const reservation = { hotel_id, guest_id, room_id, date_start, date_end };

    //     setIsPending(true);

    //     fetch("", {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json"},
    //         body: JSON.stringify(reservation)
    //     }).then(() => {
    //         console.log("Your reservation has been confirmed!");
    //         setIsPending(false);
    //     })
    //  }

    return (
        <div className="div-text">
            <p>-👷----🚧UNDER CONSTRUCTION🚧----👷-</p>
            {/* <div>
                   {
       reservations.map( 
         (eachReservation)=>{
           return( <Reservations 
            key={eachReservation.id} // For React  🤖
            reservationsProp={eachReservations} // For Us  :)
            /> )
          }
          )
        }
            </div> */}
            
            <h3>Confirm your Reservation!</h3>
            <p>form with button</p>
            {/* <form onSubmit={handleSubmit}>
                <label>Hotel:</label>
                <input
                    type="text"
                    required
                    value={hotel_id}
                    onChange={(e) => setHotel_id(e.target.value)}
                    />
                <label>Member:</label>
                <input
                    type="text"
                    required
                    value={guest_id}
                    onChange={(e) => setGuest_id(e.target.value)}
                    />
                <label>Room:</label>
                <input
                    type="text"
                    required
                    value={room_id}
                    onChange={(e) => setRoom_id(e.target.value)}
                    />
                <label>Arriving:</label>
                <input
                    type="text"
                    required
                    value={date_start}
                    onChange={(e) => setDate_start(e.target.value)}
                    />
                    <br/><br/>
                <label>Checking Out:</label>
                <input
                    type="text"
                    required
                    value={date_end}
                    onChange={(e) => setDate_end(e.target.value)}
                    />
               
            { !isPending &&<button>Submit You Reservation!</button>}
            { isPending &&<button disabled>Checking availability...</button>}
            </form> */}

        </div>
    );
}

export default Reservations;