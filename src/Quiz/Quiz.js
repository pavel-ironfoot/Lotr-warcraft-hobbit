import obj from './Quiz.module.css';
import Game from './Game/Game';
import Result from './Result/Result';
import React from 'react';

const questions = [
    {
        title:'Dain was a ...',
        variants: ['elf','human','dwarf'],
        correct: 2,
    },
    {
        title:'Bilbo was a ...',
        variants: ['elf','hobbit','dwarf'],
        correct: 1,
    },
    {
        title:'What year was the battle of the "five armies?"',
        variants: [2945,2513,2941],
        correct: 2,
    },
    {
      title:'Gollum was a ...',
      variants: ['hobbit','goblin','wizard'],
      correct: 0,
    },
    {
      title:'Lurtz was a ...',
      variants: ['orc','goblin','uruk-hai'],
      correct: 2,
    },
    {
      title:'The lake near Khazad-dum is',
      variants: ['Kheled-zaram','Zirak-zigil','Kheledzar'],
      correct: 0,
    },
    {
      title:`What was the name of Samwise Gamgee's wife?`,
      variants: ['Rosie','Lobelia','Melian'],
      correct: 0,
    },
    {
      title:'Nori was a ...',
      variants: ['dwarf','hobbit','wizard'],
      correct: 0,
    },
    {
      title:'First name of Gollum is ...',
      variants: ['Smeagol','Deagol','Pippin'],
      correct: 0,
    },
    {
      title:'Dwarven name of Gandalf is ...',
      variants: ['Istar','Tharkûn','Mithrandir'],
      correct: 1,
    },
    {
        title:'Who killed a Smaug',
        variants: ['Gandalf','Aragorn','Bard'],
        correct: 2,
    },
    {
        title:`Gimli's weapon was a ...`,
        variants: ['sword','hummer','axe'],
        correct: 2,
    },
    {
        title:`Father's name of Aragorn is ...`,
        variants: ['Arathorn','Elendil','Agranom'],
        correct: 0,
    },
    {
        title:'Trolls names which Bilbo and company meet',
        variants: ['Bert,Tom,William','Tom,Pin,Bert','Allan,Bob,Murph'],
        correct: 0,
    },
    {
      title:'Tower-fortification in Isengard',
      variants: ['Orthanc','Bundushatkur','Paris'],
      correct: 0,
    },
    {
      title:'Muradin Bronzebeard brother`s name is',
      variants: ['Munin','Orlando','Magni'],
      correct: 2,
    },
    {
      title:'... was the chieftain of the Frostwolf clan',
      variants: ['Orgrim','Durotan','Guldan'],
      correct: 1,
    },
    {
      title:'What weapons use by Legolas?',
      variants: ['daggers and bow','elven sword','spear and shield'],
      correct: 0,
    },
    {
      title:'Dwarven kingdom beneath the Misty Mountains',
      variants: ['Erebor','Khazad-dum','Khaz-modan'],
      correct: 1,
    },
    {
      title:`... also known as the Wolf's Head, was a one hundred-foot long battering ram`,
      variants: ['Grond','Thor','Tror'],
      correct: 0,
    },
  ];

const Quiz = () =>{
    const [step,setStep] = React.useState(0);
const question = questions[step];
const [correct,setCorrect] = React.useState(0);

const onClickVariant = (index) =>{
  console.log(step,index);
  setStep(step+1);
  if(question.correct === index){
    setCorrect(correct + 1);
  }
}
  return (
    <div className={obj.container}>
      {(step !== questions.length)?<Game step={step} onClickVariant={onClickVariant}  question={question}/>:<Result setCorrect={setCorrect} setStep={setStep} questions={questions} correct={correct}/>}
    </div>
  );
        
    
}

export default Quiz;