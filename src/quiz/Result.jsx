import React, { Component } from 'react';
//import Question from './Question';


class Result extends Component{
    render() {
        let message = "My message";
        //let score = "";
        let percentage_score = (this.props.score /this.props.questions.length) * 100;
        if(percentage_score >80){
            let message = "Great job!"
            // alert(message)
        }
        else if(percentage_score > 40){
            let message = "You did okay!"
            // alert(message)
        }
        else{
            let message = "You failed!";
            // alert(message)
        }
        return (
            <div>
                <p>You passed {this.props.score}  out of {this.props.questions.length} questions</p>
                <h1> <strong>percentage Score: {percentage_score}% </strong>  </h1>
            </div>
        );
      }

}

export default Result;