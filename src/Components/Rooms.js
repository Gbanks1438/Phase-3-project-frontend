import RoomCard from './RoomCard.js';

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
            <span>The house features expansive water views, 5 fireplaces, 5 bedrooms, and a 3 car garage. There are modern amenities such as a dishwasher, laundry room, automatic backup generator, highspeed Wi-Fi, and multi-room audio for music.</span>
            <br/>
            <br/>
            <span>On the main floor you will find the kitchen, an office, a half bathroom, the formal dinning room, the master bedroom with ensuite, access to the back deck, and the livingroom with the grand fireplace. There is a charcoal grill on the porch with a table and seating for 8 people.</span> 
            <br/>
            <br/>
            <span>The second floor has three bedrooms and a shared full bathroom with two sinks.</span> 
            <br/>
            <br/>
            <span>In the basement we have a den with an entertainment center and a large screen HD TV, as well as a full bathroom. There is also a gameroom with a full sized pool table and a full kitchen. Off the back of the house is a ground level screened in porch with an outdoor shower and a path to the dock.</span>
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