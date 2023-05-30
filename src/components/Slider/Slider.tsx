import './Slider.css';

interface SLIDERPROPS {
  min: string,
  max: string,
  step: string,
  sliderValue: string,
  setSliderValue: Function
}

const Slider = ({min, max, step, sliderValue, setSliderValue}:SLIDERPROPS) => {

  return (
    <input type='range' min={min} max={max} step={step} value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} className='slider'/>
  )
}

export default Slider
