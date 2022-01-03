function Rooms({rooms}) { 
// console.log(rooms[0].has_ensuite)
    return (
        <div>
            <div>
            <div className="div-text">
            <span>The house features expansive water views, 5 fireplaces, 5 bedrooms, and a 3 car garage. There are modern amenities like a dishwasher, laundry, automatic backup generator, highspeed Wi-Fi, and multi-room audio for music.</span>
            <br/>
            <br/>
            <span>On the main floor you will find the kitchen, an office, a half bathroom, the formal dining room, the master bedroom with ensuite, access to the back deck, and the livingroom with the grand fireplace. There is a charcoal grill on the porch with a table and seating for 8 people. The second floor has three bedrooms and a shared full bathroom with two sinks. In the basement we have a cozy den with an entertainment center and a large screen HD TV, as well as a full bathroom. There is also a game room with a full sized pool table and a full kitchen. Off the back of the house is a ground level screened in porch with an outdoor shower and a path to the dock.</span>
        </div>
                {rooms.map((eachRoom)=>{
                     return ( 
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
                                <td>{eachRoom.id}</td>
                                <td>{eachRoom.floor_number}</td>
                                <td>{eachRoom.num_of_beds}</td>
                                <td>{eachRoom.bed_size}</td>
                                <td>{eachRoom.has_ensuite}</td>
                            </tr>
                            </tbody>
                        </table>
                        )
                     }   )
                 }
            </div>  
        </div> 
    )
}

export default Rooms;