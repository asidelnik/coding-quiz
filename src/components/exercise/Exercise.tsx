import c from './Exercise.module.css';
import { ExerciseType } from '../../types/exerciseType';
import { useState } from 'react';
export default function Exercise({ question, answers, numberToDisplay }: ExerciseType) {
  const [answer, setAnswer] = useState<string>('');
  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false);

  function textChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(event.target.value);
  }

  function showAnswer() {
    setIsShowAnswer(!isShowAnswer);
  }

  return (
    <>
      <h3 className={c.question}>{numberToDisplay} - {question}</h3>
      <textarea className={c.textArea} value={answer} onChange={textChangeHandler} rows={3} />
      <button onClick={showAnswer}>Show answer</button>

      {
        isShowAnswer && (
        <>
            <h3 className={c.answerTitle}>Answers</h3>
            <ul className={c.answerList}>
            {answers.map((answer: string, index: number) => <li key={index}>{answer}</li>)}
          </ul>
        </>
      )}
      {/* {isShowAnswer && <button onClick={nextExercise}>Next</button>} */}
    </>
  )
}