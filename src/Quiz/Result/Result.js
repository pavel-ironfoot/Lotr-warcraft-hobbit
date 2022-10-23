import './Result.css';
import happy from './smaug-treasure.gif';
const Result = ({questions,correct,setStep,setCorrect}) => {
    const oneMoreTime = () =>{
        setStep(0);
        setCorrect(0);
    }
    return (
        <div className="Result">
            <div className='happyImg'>
                <img className='resultImg' src={happy} alt='presentVin'/>               
            </div>
            <div className='happyText'>
                {(correct ===20)?<h3>You are genius! {questions.length} from {questions.length}, My congratulations!</h3>:(correct>=4)?<h3>You guessed right {correct} answers from {questions.length}</h3>:<h3>Stuped asshole, only {correct} answers from {questions.length}!</h3>}
            </div>
            <div className='happyButton'>
                <button className='resultButton' onClick={oneMoreTime}>Try it one more time</button>
            </div>
        </div>
    );
}
export default Result;