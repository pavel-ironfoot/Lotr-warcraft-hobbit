import './Game.css';

const Game = ({question,onClickVariant,step}) => {
    let stepHelper = (step+1)*5 + '%';
    return (
        <div className="Game">
            <div className='questionLine'>
                <div style={{width:stepHelper}} className='questionLinePersent'></div>
            </div>
            <h3 className="questionTitle">{question.title}</h3>
            {question.variants.map((elem,index)=><div key={elem} onClick={()=>onClickVariant(index)} className='question'>{elem}</div>)}
        </div>
    );
}
export default Game;