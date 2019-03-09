import React, { Component } from 'react';
//import '../App.css';
import Repo from './Repo.jsx'


class RepoList extends Component {
  
  render() {
    return (
        <div>
            <ul className="list-group">
                {
                    this.props.userRepos.map(repo => 
                        {
                            return <Repo 
                                    repon = {repo}
                                    key= {repo.id}
                                    {...this.props}
                                    />
                        })
                }
            
            </ul> 
        </div>
    );
  }


}

export default RepoList;
