import React, { Component } from 'react';
import Choose from './chooseQuestion';
import English from './englishQuestion';
import Translate from './translateQuestion';
import Hearing from './hearQuestion';
import Blank from './blankQuestion';
import '../styles/QuestionPage.css';
import {Questions} from '../questions';
import classes from '../styles/Main.module.css';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            questions : Questions,
            currentQuestion: "",
            questionIndex: 0,
            numberOfAnsweredQuestion: 0,
            correctAnswers: 0,
            selectedAnswer:'',
            answered: false,
            answeredCorrectly: false,
            unansweredQuestions: [0,1,2,3,4,5,6,7,8,9]
        }
        this.setAnswer = this.setAnswer.bind(this);
    }

    skipClasses = [classes.skip,'btn btn-outline-secondary'].join(' ');
    checkClasses = [classes.check, "btn btn-success check-button"].join(' ');
    correctClasses = [classes.correct, "correct-answer"].join(' ');

    setAnswer(value){
        this.setState({selectedAnswer : value});
    }


    componentDidMount(){
        const { questions, questionIndex } = this.state;
        this.setQuestion(questions, questionIndex);
    }

    setQuestion = (questions=this.state.questions, questionIndex) => {
        console.log(this.state.unansweredQuestions);
        let {currentQuestion} = this.state;
        this.setState({selectedAnswer : ''});
        if(questions.length !== 0){
            questions = this.state.questions;
            currentQuestion = questions[questionIndex];
            this.setState({
                currentQuestion
            })
        }
    }

    onSkip(){
        this.setState({answered: false})
        let {questionIndex, unansweredQuestions} = this.state;
        if(this.state.answeredCorrectly){
            unansweredQuestions.shift();
            questionIndex = unansweredQuestions[0];
            this.setState({
                questionIndex, unansweredQuestions, answeredCorrectly: false
            })
        }else{
            questionIndex = unansweredQuestions[0];
            unansweredQuestions.shift();
            unansweredQuestions.push(questionIndex);
            questionIndex = unansweredQuestions[0];
            this.setState({
                questionIndex, unansweredQuestions, answeredCorrectly: false 
            })
        }
        this.setQuestion(this.state.questions, questionIndex);
    }

    onSubmit(){
        let {selectedAnswer, currentQuestion, correctAnswers} = this.state;
        if(selectedAnswer === currentQuestion.answer){
            this.setState({answered: true})
            this.setState({answeredCorrectly: true})
            correctAnswers = correctAnswers+1;
            this.setState({correctAnswers})
        }
        else{
            this.setState({answered: true})
            this.setState({answeredCorrectly: false})
        }
    }


    correctAnswer = () => {
        return(
            <div className={this.correctClasses}>
                <div className="statement row">
                    <span className="fa fa-check-circle fa-2x"></span>
                    <p>  You are Correct</p>
                    <button className="continue-button btn btn-success" onClick={() => this.onSkip()}>CONTINUE</button>
                </div>
                <div className="extra-buttons">
                    <span className="fa fa-flag">Report</span>
                    <span className="fa fa-comment">Discuss</span>
                    <span className="fa fa-file">Explanation</span>
                </div>
            </div>
        );
    }

    wrongAnswer = () => {
        
        return(
            <div className="wrong-answer">
                <div className="statement row">
                    <span className="fa fa-times fa-2x"></span>
                    <p>  Correct Answer: {this.state.currentQuestion.answer}</p>
                    <button className="continue-button btn btn-danger" onClick={() => this.onSkip()}>CONTINUE</button>
                </div>
                <div className="extra-buttons">
                    <span className="fa fa-flag"></span>Report  
                    <span className="fa fa-comment"></span>Discuss  
                    <span className="fa fa-file"></span>Explanation
                </div>
            </div>
        );
    }

    Score = () => {
        return(
            <div>
                <h2>Your Score : </h2>
                <h4>{this.state.correctAnswers}/10</h4>
            </div>
        )
    }

    render(){
        const { currentQuestion, questionIndex, correctAnswers } = this.state;
        
        return(
            <div className="Question-container">
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" aria-valuemin="0" 
                    aria-valuemax="10" style={{width: `${(this.state.correctAnswers)*10}%`}}></div>
                </div>
                
                {
                    (questionIndex===0||questionIndex===1||questionIndex===2) && correctAnswers!==10?
                        <Choose className="Question" index={this.state.questionIndex} question={currentQuestion.question} option1={currentQuestion.option1} option2={currentQuestion.option2} option3={currentQuestion.option3} setAnswer={this.setAnswer} />
                        :<div></div>
                }    
                {
                    (questionIndex===3||questionIndex===4) && correctAnswers!==10?
                        <English className="Question" index={this.state.questionIndex} question={currentQuestion.question} option1={currentQuestion.option1} option2={currentQuestion.option2} option3={currentQuestion.option3} setAnswer={this.setAnswer} />
                        :<div></div>
                }
                {
                    (questionIndex===8) && correctAnswers!==10?
                        <Blank className="Question" index={this.state.questionIndex} question={currentQuestion.question} option1={currentQuestion.option1} option2={currentQuestion.option2} option3={currentQuestion.option3} setAnswer={this.setAnswer} />
                        :<div></div>
                } 
                {
                    (questionIndex===5||questionIndex===6||questionIndex===7) && correctAnswers!==10?
                        <Translate className="Question" index={this.state.questionIndex} question={currentQuestion.question} option1={currentQuestion.option1} option2={currentQuestion.option2} option3={currentQuestion.option3} setAnswer={this.setAnswer} />
                        :<div></div>
                } 
                {
                    (questionIndex===9) && correctAnswers!==10?
                        <Hearing className="Question" index={this.state.questionIndex} question={currentQuestion.question} option1={currentQuestion.option1} option2={currentQuestion.option2} option3={currentQuestion.option3} setAnswer={this.setAnswer} />
                        :<div></div>
                }
                {
                    correctAnswers===10?
                    <this.Score/> : (this.state.answered? 
                    (this.state.answeredCorrectly?
                    <this.correctAnswer/> : <this.wrongAnswer/>) :
                    <div className={classes.footer}>
                        <button className={this.skipClasses} type="submit" onClick={() => this.onSkip()}>Skip</button>
                        <button className={this.checkClasses} type="submit" onClick={() => this.onSubmit()}>Check</button>
                    </div>)
                }                      
            </div>
        );
    }
}

export default Main;