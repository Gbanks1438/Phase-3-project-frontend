function ReservationCard({ eachReservation , cancelButtonClicked, updateButtonClicked}) {

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
                        <td>{eachReservation.hotel_id}</td>
                        <td>{eachReservation.guest_id}</td>
                        <td>{eachReservation.room_id}</td>
                        <td>{eachReservation.date_start}</td>
                        <td>{eachReservation.date_end}</td>
                    </tr>
                </tbody>
            </table>
            <button
            onClick={() =>
            updateButtonClicked(eachReservation)}
            >Edit Reservation
            </button>
            <br />
            <button
            onClick={() => 
            cancelButtonClicked(eachReservation)}
            >Cancel Reservation
            </button>
            <br />
            <br />
        </div>
    )
}

export default ReservationCard;