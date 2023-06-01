import React from 'react'
import { useLocation } from 'react-router-dom';

import useGetTrivia from '../../hooks/useGetTrivia';

const TriviaQuestions = () => {

  const location = useLocation();
  const { url } = location.state;

  const { triviaData, isTriviaLoading } = useGetTrivia(url);

  return (
    <div>
      {url}
      <pre> {isTriviaLoading ? 'Loading Trivia...' : JSON.stringify(triviaData, undefined, 2)} </pre>
    </div>
  )
}

export default TriviaQuestions
