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
          <p class="blue-shadow"> Our den is avilable to family and friends for weekends, getaways, and holiday excursions.</p>
          <p class="blue-shadow">Please use this site to book dates in advance to avoid conflicting plans.</p>
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