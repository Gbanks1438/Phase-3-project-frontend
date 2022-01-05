import RoomCard from './RoomCard';

function Rooms({rooms}) { 

// console.log(rooms[0].has_ensuite)

    // function printEnsuite(has_ensuite) {
    //     return (has_ensuite? "Yes, it's lovely!" : "Sorry, No")
    // }

    // console.log(printEnsuite())

    return (
        <div>
            <div>
            <div className="div-text">
            <h2>Your Stay At Fox Hill Lodge</h2>
            <br/>
            <span>Surrounded by the Cherry, Maple, and Pine trees of the Rennsslaer Plateau, the house features expansive water views off the back, 5 fireplaces, 5 bedrooms, and a 3 car garage. There are modern amenities such as a dishwasher, laundry room, automatic backup generator, highspeed Wi-Fi, 55 inch 4K HD TV, and multi-room audio for music.</span>
            <br/>
            <br/>
            <span>On the main floor is the kitchen, an office, a half bathroom, the formal dinning room, the master bedroom with ensuite, access to the back deck, and the livingroom with the grand fireplace. There is a charcoal grill on the porch with a table and seating for 8.</span> 
            <br/>
            <br/>
            <span>The second floor has three bedrooms, each with a skylight. One room looks out back across the water, while the other two face the front into the woods. There is a shared full bathroom with two sinks.</span> 
            <br/>
            <br/>
            <span>In the basement we have a den with two couches and an entertainment center, as well as a full bathroom with two sinks. There is also a gameroom with a full sized pool table and a full kitchen. Off the back of the house is a ground level screened in porch with an outdoor shower and a path to the dock.</span>
        </div>
                {rooms.map((eachRoom)=>{
                     return ( 
                         <div> 
                     <RoomCard
                        key={eachRoom.id} // For React
                        aRoom={eachRoom} // For Us
                        // printEnsuite={printEnsuite}
                        />
                        </div>  
                        )
                     }   )
                 }
            </div>  
        </div> 
    )
}

export default Rooms;