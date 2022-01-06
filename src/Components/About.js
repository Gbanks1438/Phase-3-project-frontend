import logo from '/Users/greg/Development/coding/Mod3/Phase-3-project-frontend/src/Images/Energy+Fox.png';

function About() {
  
    return (
        <div>
          <br/>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <br/>
        <div>
          <h1 class="green-neon-text">Fox Hill Lodge</h1>
          <h4 class="green-neon-text">Located on Big Bowman Pond in upstate NY.</h4>
          <br/>
          <p class="blue-shadow">Our camp is avilable to family and friends for weekends, getaways, and holiday excursions.</p>
          <p class="blue-shadow">We have everything available for kayaking, hiking, swimming, and fishing.</p>
          <p class="blue-shadow">There is also seasoned and split firewood stacked against the garage.</p>
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