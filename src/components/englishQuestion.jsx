import React from 'react';
import '../styles/QuestionPage.css';
import Speech from 'react-speech';
import classes from '../styles/englishQuestion.module.css';

const English = function(props){

    let { question, option1, option2, option3, setAnswer } = props;
    
    let text = question?question.substring(question.lastIndexOf(',')+2):'';

    let optionsClasses = [classes.options,'options'].join(' ');
    let optionClasses = [classes.option, "btn btn-outline-primary btn-option"].join(' ');

    return(
        <div className="Question">
            <h5>Write in English: '{text}'</h5>
            <span><i className="fa fa-volume-up fa-2x"></i></span>
            <Speech 
                textAsButton={true}
                displayText="Tap to Hear"
                text={text}
                voice="Google Spanish Female" />
            <form className={optionsClasses}> 
                <label>
                    <input className="radio" type="radio" id={option1} name="radio" value={option1} onClick={() => setAnswer(option1)}/>
                    <div className={optionClasses}>{option1}</div>
                </label>
                <label>
                    <input className="radio" type="radio" id={option2} name="radio" value={option2} onClick={() => setAnswer(option2)}/>
                    <div className={optionClasses}>{option2}</div>
                </label>
                <label>
                    <input className="radio" type="radio" id={option3} name="radio" value={option3} onClick={() => setAnswer(option3)}/>
                    <div className={optionClasses}>{option3}</div>
                </label>
            </form>
        </div>
    );
}

export default English;