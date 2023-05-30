import './Buttons.css';

interface BUTTONSPROPS {
    buttonCount: number,
    labels: string[],
    selectedButton: number,
    setSelectedButton: Function
}

const Buttons = ({buttonCount, labels, selectedButton, setSelectedButton}:BUTTONSPROPS) => {
  return (
    <div className='flex'>
      
    </div>
  )
}

export default Buttons
