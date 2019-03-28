import React, { Component } from 'react';
//import logo from './logo.svg';

import Questionlist from './quiz/Questionlist'
import './App.css';
import Scorebox from './quiz/Scorebox';
import Result from './quiz/Result';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {

      questions: [
        {
          id: 1, 
          text: 'what is your name',
          choices: [
            {
              id: 'a',
              text: 'Michael'
            },
            {
              id: 'b',
              text: 'Cole'
            },
            {
              id: 'c',
              text: 'Sandy'
            },
          ],
          correct: 'a'
        },

        {
          id: 2,
          text: 'who is your Dad?',
          choices: [
            {
              id: 'a',
              text: 'Michael'
            },
            {
              id: 'b',
              text: 'Cole'
            },
            {
              id: 'c',
              text: 'Sandy'
            },
          ],
          correct: 'b'
        },


        {
          id: 3,
          text: 'Where were you born?',
          choices: [
            {
              id: 'a',
              text: 'Texas'
            },
            {
              id: 'b',
              text: 'Colombia'
            },
            {
              id: 'c',
              text: 'Heaven'
            },
          ],
          correct: 'a'
        },

        {
          id: 4,
          text: 'What is your fav food?',
          choices: [
            {
              id: 'a',
              text: 'Amala'
            },
            {
              id: 'b',
              text: 'Poundy'
            },
            {
              id: 'c',
              text: 'Rice'
            },
          ],
          correct: 'c'
        },

        {
          id: 5,
          text: 'Best subject',
          choices: [
            {
              id: 'a',
              text: 'Math'
            },
            {
              id: 'b',
              text: 'English'
            },
            {
              id: 'c',
              text: 'French'
            },
          ],
          correct: 'b'
        },
      ],
      score : 0,
      current: 1
      
    }
  } 

  
  componentDidMount(){
    // this.getUserData();
    // this.getUserRepos();
  }

  setCurrent(current){
    this.setState({current: current});
  }

  setScore(score){
    this.setState({score})
  }

  
  
  render() {
    let scorebox = "";
    let resultboard = "";
  if(this.state.current < this.state.questions.length +1){
    scorebox = <Scorebox {...this.state} />;
    let resultboard ="";
    
  }
  else{
    scorebox = "";
    let resultboard = <Result {...this.state}/>
  }
    return (
      <div className="App">

      <h2>React JS Quiz App</h2>
      <Result {...this.state}/>
        {scorebox}
           <Questionlist  {...this.state } setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />

         
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
