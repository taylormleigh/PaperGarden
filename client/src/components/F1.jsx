import React from 'react';

export default class F1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      worldName: '',
    }
  }

  formFill(e){
    var worldName = e.target.value
    this.setState({
      worldName: worldName
    })
  }

  render() {
    return (
      <div id="F1">
        <h1>NEW WORLD</h1>
        <h3>Fill out as much or as little as you like; your world can be edited later.</h3>
        <br />
        Name your world
        <br />
        <input onChange={this.formFill.bind(this)} value={this.state.worldName} placeholder="world name"></input>
        <br />
        <h2>PLANET</h2>
        <br />
        ... coming soon ...
        <br />
        <h2>LOGIC</h2>
        <br />
        ... coming soon ...
        <br />
        <h2>LIFE</h2>
        <br />
        ... coming soon ...
        <br />
      </div>
    );
  }
}


{/* <form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form> */}