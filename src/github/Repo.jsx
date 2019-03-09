import React, { Component } from 'react';
//import '../App.css';


class Repo extends Component {
  
  render() {
      const {repon} = this.props;
    return (
        <div>
            {repon.name}  ||{repon.description}
        </div>
    );
  }


}

export default Repo;
