import React, { useState } from 'react';
import './TriviaGenerator.css';
import triviaCatagories from '../../data/triviaCatagories';
import Slider from '../../components/Slider/Slider';
import Dropdown from '../../components/Dropdown/Dropdown';
import Buttons from '../../components/Buttons/Buttons';

const TriviaGenerator = () => {

  const [ sliderValue, setSliderValue ] = useState("10");
  const [ triviaCatagoryId, setTriviaCatagoryId ] = useState("0");
  const [ selectedDifficulty, setSelectedDifficulty ] = useState(0);

  return (
    <div className='trivia-generator-container flex'>

      <h1 className='title-text'>Trivia</h1>

      <div className='inputs-container flex'>

        {[
          ['Questions:' , <Slider min="1" max="50" step="1" sliderValue={sliderValue} setSliderValue={setSliderValue}/>],
          ['Catagory:', <Dropdown catagories={triviaCatagories} setTriviaCatagoryId={setTriviaCatagoryId} />],
          ['Difficulty:', <Buttons buttonCount={4} labels={['any', 'easy', 'medium', 'hard']} selectedButton={selectedDifficulty} setSelectedButton={setSelectedDifficulty} />]
          ].map(([title, component], index) => {
            return (
              <div key={index} className='input flex'>
                <p className='input-label'>{title}</p>
                <div className='selector-container'>{component}</div>
              </div>
            )}
          )}

      </div>

      <button> Let's Play! </button>

    </div>
  )
}

export default TriviaGenerator
