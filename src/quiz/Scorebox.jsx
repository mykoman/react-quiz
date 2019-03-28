import React, { Component } from 'react';
//import Question from './Question';


class Scorebox extends Component{
    render() {
        return (
            <div>
                Question {this.props.current} out of {this.props.questions.length}<strong><span style={{marginLeft: "10px"}}>Score: {this.props.score}</span></strong>
                
            </div>
        );
      }

}

export default Scorebox; 