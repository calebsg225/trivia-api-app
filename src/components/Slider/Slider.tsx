import './Slider.css';

interface SLIDERPROPS {
  min: string,
  max: string,
  step: string,
  sliderValue: string,
  setSliderValue: Function
}

const Slider = ({min, max, step, sliderValue, setSliderValue}:SLIDERPROPS) => {

  const onSliderUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(e.target.value);
  }

  const calcLeftDistance = (): string => {
    const newVal = ((+sliderValue - +min) * 100) / (+max - +min);
    const sliderThumbWidthRem = 1.7;
    return `calc(${newVal}% + (${0 - newVal * (sliderThumbWidthRem*16/100)}px))`;
  }

  return (
    <div className='slider-container'>
      <input 
        type='range' 
        min={min} 
        max={max} 
        step={step} 
        value={sliderValue} 
        onChange={(e) => onSliderUpdate(e)} 
        className='slider'
      />
      
      <output 
        className='slider-output' 
        style={{left: calcLeftDistance()}}
      >{sliderValue}</output>
    </div>
  )
}

export default Slider
