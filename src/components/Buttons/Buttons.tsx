import './Buttons.css';

interface BUTTONSPROPS {
    labels: string[][],
    selectedButton: string,
    setSelectedButton: Function
}

const Buttons = ({labels, selectedButton, setSelectedButton}:BUTTONSPROPS) => {
  return (
    <>
      {labels.map((label, index) => 
        <button onClick={() => setSelectedButton(label[1])} className={`button ${label[1] === selectedButton ? 'selected-button' : 'select-button'}`} key={index}>{label[0]}</button>
      )}
    </>
  )
}

export default Buttons
