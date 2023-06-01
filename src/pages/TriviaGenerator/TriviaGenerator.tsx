import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TriviaGenerator.css';
import { triviaCatagories, triviaDifficulties, triviaAnswerTypes } from '../../data/triviaCatagories';

import Slider from '../../components/Slider/Slider';
import Dropdown from '../../components/Dropdown/Dropdown';
import Buttons from '../../components/Buttons/Buttons';

const TriviaGenerator = () => {

  const [ triviaQuestionCount, setsetTriviaQuestionCount ] = useState("10");
  const [ triviaCatagoryId, setTriviaCatagoryId ] = useState("0");
  const [ selectedDifficulty, setSelectedDifficulty ] = useState(triviaDifficulties[0][1]);
  const [ selectedAnswerType, setSelectedAnswerType ] = useState(triviaAnswerTypes[0][1]);

  const createUrl = (count:string, catagory:string, difficulty:string, type:string) => {
    return `https://opentdb.com/api.php?amount=${count}${catagory === '0' ? '' : `&category=${catagory}` }${difficulty}${type}`;
  }

  return (
    <div className='trivia-generator-container flex'>

      <h1 className='title-text'>Trivia</h1>

      <div className='inputs-container flex'>

        {[
          ['Questions:' , <Slider min="1" max="50" step="1" sliderValue={triviaQuestionCount} setSliderValue={setsetTriviaQuestionCount}/>],
          ['Catagory:', <Dropdown catagories={triviaCatagories} setTriviaCatagoryId={setTriviaCatagoryId} />],
          ['Difficulty:', <Buttons labels={triviaDifficulties} selectedButton={selectedDifficulty} setSelectedButton={setSelectedDifficulty} />],
          ['Type:', <Buttons labels={triviaAnswerTypes} selectedButton={selectedAnswerType} setSelectedButton={setSelectedAnswerType} />]
          ].map(([title, component], index) => {
            return (
              <div key={index} className='input flex'>
                <p className='input-label'>{title}</p>
                <div className='selector-container flex'>{component}</div>
              </div>
            )}
          )}

      </div>
      
      <Link to='/trivia' state={{ url: createUrl(triviaQuestionCount, triviaCatagoryId, selectedDifficulty, selectedAnswerType) }}>
        <button>Let's Play!</button>
      </Link>

    </div>
  )
}

export default TriviaGenerator
