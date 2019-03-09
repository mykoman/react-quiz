import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Profile from './github/Profile.jsx';
import Search from './github/Search'

// import PropTypes from 'prop-types';
//this line of code was added to allow jquery run smoothly
const $ = window.$;

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
        this.setState({userData: data});
        console.log(data); 
      }.bind(this),
      error: function(xhr, status, err)
      {
        this.setState({username: null});
        alert(err);
      }.bind(this)

    })
  }
  

  getUserRepos()
  {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+ '/repos?client_id='+this.props.clientId+'&per_page='+this.props.perPage+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success:function(data)
      {
        this.setState({userRepos: data});
        console.log(data); 
      }.bind(this),
      error: function(xhr, status, err)
      {
        this.setState({username: null});
        alert(err);
      }.bind(this)

    })
  }
  
  handleFormSubmit(username){
    this.setState({username: username}, function()
    {
      this.getUserData();
    this.getUserRepos();
    }
      )
  }

  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }

  
  
  render() {
    return (
      <div className="App">
            <Search  onFormSubmit ={this.handleFormSubmit.bind(this)} />
            <Profile {...this.state} />
         
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
