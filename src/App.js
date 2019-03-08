import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import PropTypes from 'prop-types';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      username : 'mykoman',
      userData : [],
      userRepos : [],
      perPage : 5
    }
  }

  getUserData()
  {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+ '?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success:function(data)
      {
        console.log(data); 
      }.bind(this),
      error: function(xhr, status, err)
      {
        alert(err);
      }.bind(this)

    })
  }
  
  componentDidMount(){
    this.getUserData();
  }
  
  render() {
    return (
      <div className="App">
        {<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.clientId}
          </a>
        </header>}
      </div>
    );
  }


}
// App.propTypes = {
//   clientId: React.PropTypes.string,
//   clientSecret: React.PropTypes.string
// };

App.defaultProps = {
  clientId : 'a5a2d6cf3cf8b56ff7e0',
  clientSecret : 'bf451b95ba56b2f5faeecdea1a9f5c5612e2adc3'
};
// App.myke = {
//   name: "Michael",
//   gender: 'male'
// }

export default App;
