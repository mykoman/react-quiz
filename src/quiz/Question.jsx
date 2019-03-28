import React, { Component } from 'react';
//import Question from './Question';


class Question extends Component{

    onChangeAnswer = function(e)
    {
        e.preventDefault();
        const {setCurrent, setScore, question} = this.props;
        let selected = e.target.value;
        //alert('hi'+selected);
        if(selected === question.correct){
           setScore(this.props.score+1);
           //alert(this.props.score);
        }
        setCurrent(this.props.current+1);
        
    }
    render() {
        const {question} = this.props;
        return (
            <div>
                <h3>     Question {question.id}. {question.text} </h3>
                
                {
                    this.props.question.choices.map(choice => {return <li key= {choice.id}> <input type='radio' onChange={this.onChangeAnswer.bind(this)} name={question.id} value={choice.id}></input>{choice.id}. {choice.text}</li> })
                }
                <hr />
            </div>
        );
      }

}

export default Question;