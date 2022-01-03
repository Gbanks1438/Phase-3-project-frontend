function RoomCard(props) {
// props.rooms.map((eachRoom)=>{console.log("Here is each room-->", eachRoom)}) //We have each room

    return (
        <div>
            {/* {props.rooms.map((eachRoom)=>{console.log("Here is each room-->", eachRoom)})} */}
                <div>
                    {/* {props.rooms.map((eachRoom)=>{ */}
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
                                <td>Room ID</td>
                                <td>Floor number</td>
                                <td>Total beds</td>
                                <td>Bed size</td>
                                <td>Yes/No</td>
                                {/* <td>"#{eachRoom.room.id}"</td>
                                <td>"#{eachRoom.floor_number}"</td>
                                <td>"#{eachRoom.num_of_beds}"</td>
                                <td>"#{eachRoom.bed_size}"</td>
                                <td>"#{eachRoom.has_ensuite}"</td> */}
                            </tr>
                            </tbody>
                        </table>
                    {/* }   )
                } */}
                </div>  
        </div> 
    )
}

export default RoomCard;