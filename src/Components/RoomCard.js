function RoomCard({aRoom}, {printEnsuite}) { 
// console.log(aRoom)
        return (
            <div>
                 <table>
                    <thead>
                        <tr>
                            <th>Room Number</th>
                            <th>Floor</th>
                            <th>Number of beds</th>
                            <th>Bed Size</th>
                            <th>Ensuite available</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{aRoom.id}</td>
                            <td>{aRoom.floor_number}</td>
                            <td>{aRoom.num_of_beds}</td>
                            <td>{aRoom.bed_size}</td>
                            <td>{aRoom.has_ensuite}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

export default RoomCard;
