import './TriviaNavigation.css';

interface TRIVIANAVPROPS {
    category: string,
    currentQuestion: number,
    totalQuestions: number,
    changeQuestion: Function
}

const TriviaNavigation = ({category, currentQuestion, totalQuestions, changeQuestion}:TRIVIANAVPROPS) => {
  return (
    <section className='flex'>
      <p>Category: {category}</p>
      <div className='flex'>
        <p>{`${currentQuestion} / ${totalQuestions}`}</p>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </section>
  )
}

export default TriviaNavigation
