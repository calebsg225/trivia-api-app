import './Dropdown.css';

interface DROPDOWNPROPS {
  catagories: (string | number)[][],
  setTriviaCatagoryId: Function
}

const Dropdown = ({ catagories, setTriviaCatagoryId }:DROPDOWNPROPS) => {

  return (
    <select name='catagory' className='dropdown' onChange={(e) => setTriviaCatagoryId(e.target.value)}>
      {catagories.map(([ catagory, id ]) => 
        <option key={id} value={id}>{catagory}</option>
      )}
    </select>
  )
}

export default Dropdown
