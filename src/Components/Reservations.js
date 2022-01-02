function Reservations(props) {
    console.log("reservations: ", props.reservations)

    // map over props.reservations to get to the key/values


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
            <p>-👷----🚧UNDER CONSTRUCTION🚧----👷-</p>
            <p>Add a div with cards to display existing reservations here</p>

                        <div className="form-div">
                            <form>
                                {/* add to form tag above --> onSubmit={handleSubmit} */}
                                <label>Hotel:</label>
                                <input
                                    type="text"
                                    required
                                    // value={eachReservation.hotel_id}
                                    // onChange={(e) => setHotel_id(e.target.value)}
                                    />
                                <br/>
                                <label>Member:</label>
                                <input
                                    type="text"
                                    required
                                    // value={eachReservation.guest_id}
                                    // onChange={(e) => setGuest_id(e.target.value)}
                                    />
                                <br/>
                                <label>Room:</label>
                                <input
                                    type="text"
                                    required
                                    // value={eachReservation.room_id}
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