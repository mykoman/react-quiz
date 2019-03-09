import React, { Component } from 'react';
//import '../App.css';
import RepoList from './RepoList';


// import PropTypes from 'prop-types';
//this line of code was added to allow jquery run smoothly
const $ = window.$;

class Profile extends Component {
  
  render() {
    return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.userData.name}</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-4">
                <img src={this.props.userData.avatar_url} className="thumbnail" />
              </div> 
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12">
                      <span className="label label-primary">{this.props.userData.public_repos} Repos</span> ||
                      <span className="label label-success">{this.props.userData.public_gists} Gists</span> ||
                      <span className="label label-info">{this.props.userData.followers} Followers</span> ||
                      <span className="label label-danger">{this.props.userData.following} Following</span>
                    </div>  
                    <hr />

                    <dl>Username</dl>
                    <dd>{this.props.userData.login}</dd>
                    <dl>Location</dl>
                    <dd>{this.props.userData.location}</dd>
                    <dl>Email</dl>
                    <dd>{this.props.userData.email}</dd>
                </div>
              </div>
            </div>
            <a className="btn btn-primary" href={this.props.userData.html_url}>Visit Profile</a>
          <hr />

          <h3>User Repos</h3>
           <RepoList userRepos={this.props.userRepos} />

          </div>
        </div>
    );
  }


}
// App.propTypes = {
//   clientId: React.PropTypes.string,
//   clientSecret: React.PropTypes.string
// };


// App.myke = {
//   name: "Michael",
//   gender: 'male'
// }

export default Profile;
