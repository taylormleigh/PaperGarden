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
      loggedIn: true,//set to true for testing
      worlds: []
    }

    this.login = this.login.bind(this);
    this.prev = this.prev.bind(this);
    this.worldList = this.worldList.bind(this);
    this.homeButton = this.homeButton.bind(this);
    this.newRegion = this.newRegion.bind(this);
    this.newCity = this.newCity.bind(this);
    this.newWorld = this.newWorld.bind(this);
  }

  //saves input to the database
  componentDidMount(){
    //axios get request
    axios.get('http://localhost:4321/worlds')
    .then((res) => {
      // console.log("app.jsx axios get: ", res.data);
      this.setState({
        worlds: [...res.data]
      })

    })
    .catch((err) => {console.error("--> ruh roh: ", err)});
  }

  //creates a user for new users/logs in existing users
  login(){
    this.setState({
      loggedIn: true
    })
  }

  //go backward a page
  prev(){
    if (this.state.form > 1) {
      var prev = this.state.form - 1 
      this.setState({
        form: prev
      })
    }
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
    // this.save();

    this.setState({
      form: 2
    })
  }
  //when you click "new city" it takes you back to the new city screen
  newCity(){
    // this.save();

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
          <Home 
            newWorld={this.newWorld}/>
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
            done={this.worldList}
            prev={this.prev}
            form={this.state.form}
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
          <WorldList worldList={this.state.worlds}/>
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
            done={this.worldList}
            prev={this.prev}
            form={this.state.form}
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