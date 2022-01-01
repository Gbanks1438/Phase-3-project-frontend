import logo from '/Users/greg/Development/coding/Mod3/phase-3-project-frontend/src/Images/Energy+Fox.png';

function About() {
  
    return (
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <br/>
        <div>
          <h1 class="green-neon-text">Fox Hill Lodge</h1>
          <h4 class="green-neon-text">Located on Big Bowman Pond in upstate NY.</h4>
          <br/>
          <br/>
          <p class="blue-shadow">Our 'camp' is avilable to family and friends for weekends, getaways, and holiday excursions.</p>
          <p class="blue-shadow">The house features expansive water views, 5 fireplaces, and a 3 car garage.</p>
          <p class="blue-shadow">There are modern amenities like a dishwasher, laundry, automatic backup generator, highspeed Wi-Fi, and multi-room audio for music.</p>
          <br/>
          <p class="blue-shadow">On the main floor you will find the kitchen, an office, a half bathroom, the formal dining room, the master bedroom with ensuite, access to the back deck, and the livingroom with the grand fireplace.</p>
          <p class="blue-shadow">The second floor has three bedrooms and a full bathroom.</p>
          <p class="blue-shadow">In the basement we have a cozy den with an entertainment center and a large screen HD TV, as well as a full bathroom.</p>
          <p class="blue-shadow">There is also a game room with a full sized pool table and a full kitchen.</p>
          <p class="blue-shadow">Off the back of the house is a ground level screened in porch with an outdoor shower.</p>
          <br/>
          <p class="blue-shadow">We have everything available for kayaking, hiking, swimming, and fishing.</p>
          <p class="blue-shadow">And we also have stacks of dry, aged, and split firewood.</p>
          <br/>
          <p class="blue-shadow">Please visit the Reservations tab to book dates.</p>
          </div>
          <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          </div>
    );
}

export default About;