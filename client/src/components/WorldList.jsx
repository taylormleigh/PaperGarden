import React from 'react';
import WorldView from './WorldView.jsx';

export default class WorldList extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      worldView: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  //on clicking the world, shows all the info associated with it
  handleClick(){
    this.setState({
      worldView: true
    })
  }
  
  render() {
    if (!this.state.worldView) {
      return (
        <div className="container">
            <div className="worldList">
            <h1>MY WORLDS</h1>
            <ul>
              <li><WorldView 
                click={this.handleClick}
                worldView={this.state.worldView}
                worldName={this.props.worldList[0].worldname}/></li>
              <li>DopeSpot</li>
              <li>Gargantuan 6</li>
            </ul>
            </div>
        </div>
      );
    } else {
      return (
        <div className="container">
            <div className="worldList">
            <WorldView 
                click={this.handleClick}
                worldView={this.state.worldView}
                worldName={this.props.worldList[0].worldname}/>
            </div>
        </div>
      );
    }
  }
}