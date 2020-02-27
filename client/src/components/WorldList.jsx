import React from 'react';
import WorldView from './WorldView.jsx';

export default class WorldList extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      worldView: false,
      worlds: this.props.worldList,
      index: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  //on clicking the world, shows all the info associated with it
  handleClick(e){
    this.setState({
      worldView: true,
      index: e.target.id
    })
  }
  
  render() {
    if (!this.state.worldView) {
      return (
        <div className="container">
            <div className="worldList">
            <h1>MY WORLDS</h1>
            <ul>
            {
              this.props.worldList.map( (world, i) => {
                return (
                  <li key={i}>
                    <WorldView 
                    index={i}
                    click={this.handleClick}
                    world={world}
                    worldView={this.state.worldView}
                    worldName={world.worldname}/>
                  </li>
                )})
            }
            </ul>
            </div>
        </div>
      );
    } else {
      return (
        <div className="container">
            <div className="worldList">
            <WorldView
                index={this.state.index}
                click={this.handleClick}
                worldView={this.state.worldView}
                world={this.props.worldList[this.state.index]}
                worldName={this.props.worldList[this.state.index].worldname}/>
            </div>
        </div>
      );
    }
  }
}