import { useReducer, useState } from 'react';
import './Question.css';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion';
import FifthQuestion from './FifthQuestion';
import SixthQuestion from './SixthQuestion';

const Question = () => {

    const [showText1,setShowText1] = useState(false);
    const reducer = (state,action) => {
        switch(action.type){
            case "HIDE" :
                return setShowText1(true);
        }
    }

    const [result,dispatch] = useReducer(reducer,showText1)

    const [showText2,setShowText2] = useState(false);
    const reducer2 = (state,action) => {
        switch(action.type){
            case "HIDE" :
                return setShowText2(true);
        }
    }

    const [result2,dispatch2] = useReducer(reducer,showText2)

    const [showText3,setShowText3] = useState(false);
    const reducer3 = (state,action) => {
        switch(action.type){
            case "HIDE" :
                return setShowText3(true);
        }
    }

    const [result3,dispatch3] = useReducer(reducer,showText3)

    const [showText4,setShowText4] = useState(false);
    const reducer4 = (state,action) => {
        switch(action.type){
            case "HIDE" :
                return setShowText4(true);
        }
    }

    const [result4,dispatch4] = useReducer(reducer,showText4)

    const [showText5,setShowText5] = useState(false);
    const reducer5 = (state,action) => {
        switch(action.type){
            case "HIDE" :
                return setShowText5(true);
        }
    }

    const [result5,dispatch5] = useReducer(reducer,showText5)

    const [showText6,setShowText6] = useState(false);
    const reducer6 = (state,action) => {
        switch(action.type){
            case "HIDE" :
                return setShowText6(true);
        }
    }

    const [result6,dispatch6] = useReducer(reducer,showText6)

    return(
        <div className="questionMain">
            <div className="frequencyAsk">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="questionBox">
                <div className="q1">
                    <label>What is Netflix?</label>
                    <button onClick={() => setShowText1(!showText1)}>{showText1 ? "x" : "+"}</button> 
                </div>
                {showText1 && <FirstQuestion/>}
                <div className="q2">
                    <label>How much does Netflix cost?</label>
                    <button onClick={() => setShowText2(!showText2)}>{showText2 ? "x" : "+"}</button> 
                </div>
                {showText2 && <SecondQuestion/>}
                <div className="q3">
                    <label>Where can I watch?</label>
                    <button onClick={() => setShowText3(!showText3)}>{showText3 ? "x" : "+"}</button> 
                </div>
                {showText3 && <ThirdQuestion/>}
                <div className="q4">
                    <label>How do I cancel?</label>
                    <button onClick={() => setShowText4(!showText4)}>{showText4 ? "x" : "+"}</button> 
                </div>
                {showText4 && <FourthQuestion/>}
                <div className="q5">
                    <label>What can I watch on netflix?</label>
                    <button onClick={() => setShowText5(!showText5)}>{showText5 ? "x" : "+"}</button> 
                </div>
                {showText5 && <FifthQuestion/>}
                <div className="q6">
                    <label>Is Netflix good for kids?</label>
                    <button onClick={() => setShowText6(!showText6)}>{showText6 ? "x" : "+"}</button> 
                </div>
                {showText6 && <SixthQuestion/>}
                <div className="readyArea">
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="elementUp">
                        <div className="emailButton">
                            <input type="text" placeholder='Email address'></input>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question