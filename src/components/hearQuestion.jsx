import React from 'react';
import '../styles/QuestionPage.css';
import Speech from 'react-speech';

const Hearing = function(props){

    let { question, option1, option2, option3, setAnswer } = props;
    
    let text = question?question.substring(question.lastIndexOf(',')+2):'';

    return(
        <div className="Question">
            <h5>Select what you hear</h5>
            <span><i className="fa fa-volume-up fa-2x"></i></span>
            <Speech
                textAsButton={true}
                displayText="Tap to Hear"
                text={text}
                voice="Google UK English Female" />
            <form className="options">
                <label>
                    <input className="radio" type="radio" id={option1} name="radio" value={option1} onClick={() => setAnswer(option1)}/>
                    <div className="btn btn-outline-primary btn-option">{option1}</div>
                </label>
                <label>
                    <input className="radio" type="radio" id={option2} name="radio" value={option2} onClick={() => setAnswer(option2)}/>
                    <div className="btn btn-outline-primary btn-option">{option2}</div>
                </label>
                <label>
                    <input className="radio" type="radio" id={option3} name="radio" value={option3} onClick={() => setAnswer(option3)}/>
                    <div className="btn btn-outline-primary btn-option">{option3}</div>
                </label>
            </form>
        </div>
    );
}

export default Hearing;