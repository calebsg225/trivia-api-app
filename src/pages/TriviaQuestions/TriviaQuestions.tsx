import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

import useGetTrivia from '../../hooks/useGetTrivia';
import TriviaNavigation from '../../components/TriviaNavigation/TriviaNavigation';

const TriviaQuestions = () => {

  const location = useLocation();
  const { url, triviaQuestionCount } = location.state;

  const { triviaData, isTriviaLoading } = useGetTrivia(url);
  const [ currentQuestion, setCurrentQuestion ] = useState(1);

  const { results: triviaQuestions } = triviaData;

  return (
    <div>
      <TriviaNavigation category={triviaQuestions[currentQuestion].category} currentQuestion={currentQuestion} totalQuestions={triviaQuestionCount} changeQuestion={setCurrentQuestion}/>
      <main></main>
      <TriviaNavigation category={triviaQuestions[currentQuestion].category} currentQuestion={currentQuestion} totalQuestions={triviaQuestionCount} changeQuestion={setCurrentQuestion}/>
    </div>
  )
}

export default TriviaQuestions
