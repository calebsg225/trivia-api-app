import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TriviaGenerator.css';
import { triviaCategories, triviaDifficulties, triviaAnswerTypes } from '../../data/triviaCategories';

import Slider from '../../components/Slider/Slider';
import Dropdown from '../../components/Dropdown/Dropdown';
import Buttons from '../../components/Buttons/Buttons';

const TriviaGenerator = () => {

  const [ triviaQuestionCount, setsetTriviaQuestionCount ] = useState("10");
  const [ triviaCategoryId, setTriviaCategoryId ] = useState("0");
  const [ selectedDifficulty, setSelectedDifficulty ] = useState(triviaDifficulties[0][1]);
  const [ selectedAnswerType, setSelectedAnswerType ] = useState(triviaAnswerTypes[0][1]);

  const createUrl = (count:string, category:string, difficulty:string, type:string) => {
    return `https://opentdb.com/api.php?amount=${count}${category === '0' ? '' : `&category=${category}` }${difficulty}${type}`;
  }

  return (
    <div className='trivia-generator-container flex'>

      <h1 className='title-text'>Trivia Generator</h1>

      <div className='inputs-container flex'>

        {[
          ['Questions:' , <Slider min="1" max="50" step="1" sliderValue={triviaQuestionCount} setSliderValue={setsetTriviaQuestionCount}/>],
          ['Category:', <Dropdown categories={triviaCategories} setTriviaCategoryId={setTriviaCategoryId} />],
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
      
      <Link to='/trivia' state={{ 
          url: createUrl(triviaQuestionCount, triviaCategoryId, selectedDifficulty, selectedAnswerType),
          triviaQuestionCount: triviaQuestionCount }}>
        <button>Let's Play!</button>
      </Link>

    </div>
  )
}

export default TriviaGenerator
