import React from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import WorldList from './components/WorldList.jsx';
import Home from './components/Home.jsx';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      form: 0,
      worldList: false,
      home: true,
      createPage: false,
      loggedIn: false,
      world: {
        name: '',
      },
    }

    this.save = this.save.bind(this);
    this.done = this.done.bind(this);
    this.login = this.login.bind(this);
    this.worldList = this.worldList.bind(this);
    this.homeButton = this.homeButton.bind(this);
    this.newRegion = this.newRegion.bind(this);
    this.newCity = this.newCity.bind(this);
    this.newWorld = this.newWorld.bind(this);
  }

  //saves input to the database
  save(){
    let world = this.state.world
    //axios post request sends values in state
    axios.post('http://localhost:4321/', world)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {console.error("--> ruh roh: ", err)})
  }

  //starts the form over again AKA Create New World
  done(){
    this.save();

    this.setState({
      form: 4,
      worldList: false,
      home: false
    })
  }

  //creates a user for new users/logs in existing users
  login(){
    this.setState({
      loggedIn: true
    })
  }

  //when clicking "My Worlds" in header, shows the worlds list
  worldList(){
    this.setState({
      worldList: true,
      home: false,
      createPage: false
    })
  }
  //when clicking the home button, show home screen
  homeButton(){
    this.setState({
      worldList: false,
      home: true,
      createPage: false,
    })
  }
  //when you click "new region" it takes you back to new Region screen
  newRegion(){
    this.save();

    this.setState({
      form: 2
    })
  }
  //when you click "new city" it takes you back to the new city screen
  newCity(){
    this.save();

    this.setState({
      form: 3
    })
  }
  //when clicking the create new world button, start form
  newWorld(){
    this.setState({
      form: 1,
      createPage: true,
      home: false,
      worldList: false
    })
  }

  render() {

    if (this.state.home) {

      return (
        <>
          <center>
          <Header 
            worldList={this.worldList}
            newWorld={this.newWorld}
            goHome={this.homeButton}/>
          <Home />
          <Footer />
          </center>
        </>
      );

    } else if (!this.state.loggedIn) {
      
      return (
        <>
          <center>
          <Header 
            worldList={this.worldList}
            newWorld={this.newWorld}
            goHome={this.homeButton}/>
          <Login logIn={this.login}/>
          <Footer />
          </center>
        </>
      );

    } else if (this.state.createPage) {

      return (
        <>
          <center>
          <Header 
            worldList={this.worldList}
            newWorld={this.newWorld}
            goHome={this.homeButton}/>
          <Form 
            form={this.state.form}
            next={this.nextForm}
            prev={this.prevForm}
            done={this.done}
            newRegion={this.newRegion}
            newCity={this.newCity}/>
          <Footer />
          </center>
        </>
      );

    } else if (this.state.worldList && this.state.loggedIn) {

      return (
        <>
          <center>
          <Header 
            worldList={this.worldList}
            newWorld={this.newWorld}
            goHome={this.homeButton}/>
          <WorldList />
          <Footer />
          </center>
        </>
      );
  
    } else {

      return (
        <>
          <center>
          <Header 
            worldList={this.worldList}
            newWorld={this.newWorld}
            goHome={this.homeButton}/>
          <Form 
            form={this.state.form}
            next={this.nextForm}
            prev={this.prevForm}
            done={this.done}
            newRegion={this.newRegion}
            newCity={this.newCity}/>
          <Footer />
          </center>
        </>
      );

    }
  }
};

export default App;