// import App from '../App';

function ReservationCard({aReservation}, {cancelButtonClicked}) { 
    console.log(cancelButtonClicked) //undefined
            return (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Hotel Number</th>
                                <th>Guest ID</th>
                                <th>Room Number</th>
                                <th>From</th>
                                <th>Until</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{aReservation.hotel_id}</td>
                                <td>{aReservation.guest_id}</td>
                                <td>{aReservation.room_id}</td>
                                <td>{aReservation.date_start}</td>
                                <td>{aReservation.date_end}</td>
                            </tr>
                        </tbody>
                    </table>
                        <button 
                            onClick={() => 
                            cancelButtonClicked(aReservation)}>
                                Cancel Reservation
                        </button>
                    <br/>
                    <br/>
                </div>
            )
        }
    
    export default ReservationCard;