import './TriviaNavigation.css';

interface TRIVIANAVPROPS {
  category: string,
  currentQuestion: number,
  totalQuestions: number,
  changeQuestion: Function
}

const TriviaNavigation = ({category, currentQuestion, totalQuestions, changeQuestion}:TRIVIANAVPROPS) => {

  const previousQuestion = () => {
    if (currentQuestion > 0) {changeQuestion(currentQuestion - 1)}
  }
  const nextQuestion = () => {
    if (currentQuestion + 1 < totalQuestions) {changeQuestion(currentQuestion + 1)}
  }

  return (
    <section className='trivia-navigation-container flex'>
      <p>Category: {category}</p>
      <div className='question-navigation-container flex'>
        <p>{`${currentQuestion + 1} / ${totalQuestions}`}</p>
        <button onClick={previousQuestion}>Previous</button>
        <button onClick={nextQuestion}>Next</button>
      </div>
    </section>
  )
}

export default TriviaNavigation
