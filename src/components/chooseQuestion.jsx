import React from 'react';
import '../styles/QuestionPage.css';
import classes from '../styles/chooseQuestion.module.css';


const Choose = function(props){

    let { question, option1, option2, option3, setAnswer } = props;
    
    let value1 = option1? option1.substring(option1.lastIndexOf('/')+1, option1.lastIndexOf('.')) : "";
    let value2 = option2? option2.substring(option3.lastIndexOf('/')+1, option2.lastIndexOf('.')) : "";
    let value3 = option3? option3.substring(option3.lastIndexOf('/')+1, option3.lastIndexOf('.')) : "";

    let cardClass = ['card',classes.card].join(' ')

    return(
        <div className="Question">
            <h5>{question}</h5>
            <div className="row card-container">
                <label>
                    <input type="radio" name="product" className="card-input-element" value={value1} onClick={() => setAnswer(value1)}/>
                    <div className={cardClass}>
                        <img className="card-img" src={option1} alt=""/>
                    </div>
                </label>
                <label>
                    <input type="radio" name="product" className="card-input-element" value={value2} onClick={() => setAnswer(value2)}/>
                    <div className={cardClass}>
                        <img className="card-img" src={option2} alt=""/>
                    </div>
                </label>
                <label>
                    <input type="radio" name="product" className="card-input-element" value={value3} onClick={() => setAnswer(value3)}/>
                    <div className={cardClass}>
                        <img className="card-img" src={option3} alt=""/>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default Choose;