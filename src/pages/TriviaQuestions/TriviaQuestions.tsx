import { useState } from 'react'
import { useLocation } from 'react-router-dom';

import useGetTrivia from '../../hooks/useGetTrivia';
import TriviaNavigation from '../../components/TriviaNavigation/TriviaNavigation';

const TriviaQuestions = () => {

  const location = useLocation();
  const { url, triviaQuestionCount } = location.state;

  const { triviaData, isTriviaLoading } = useGetTrivia(url);
  const [ currentQuestion, setCurrentQuestion ] = useState(0);
  const [ score, setScore ] = useState(0);

  return (
    isTriviaLoading ? <p>Loading...</p> : 
    <div className='trivia-questions-container'>
      <TriviaNavigation category={triviaData.results[currentQuestion].category} currentQuestion={currentQuestion} totalQuestions={triviaQuestionCount} changeQuestion={setCurrentQuestion}/>
      <main>
        <div className='trivia-question'>{triviaData.results[currentQuestion].question}</div>
        <div className='trivia-answers'></div>
      </main>
      <TriviaNavigation category={triviaData.results[currentQuestion].category} currentQuestion={currentQuestion} totalQuestions={triviaQuestionCount} changeQuestion={setCurrentQuestion}/>
    </div>
  )
}

export default TriviaQuestions
