import './Buttons.css';

interface BUTTONSPROPS {
    labels: string[],
    selectedButton: string,
    setSelectedButton: Function
}

const Buttons = ({labels, selectedButton, setSelectedButton}:BUTTONSPROPS) => {
  return (
    <div className='flex'>
      {labels.map((label, index) => 
        <button onClick={() => setSelectedButton(label)} className={`button ${label === selectedButton ? 'selected-button' : 'select-button'}`} key={index}>{label}</button>
      )}
    </div>
  )
}

export default Buttons
