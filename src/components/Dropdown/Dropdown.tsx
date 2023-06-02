import './Dropdown.css';

interface DROPDOWNPROPS {
  categories: (string | number)[][],
  setTriviaCategoryId: Function
}

const Dropdown = ({ categories, setTriviaCategoryId }:DROPDOWNPROPS) => {

  return (
    <select name='category' className='dropdown' onChange={(e) => setTriviaCategoryId(e.target.value)}>
      {categories.map(([ category, id ]) => 
        <option key={id} value={id}>{category}</option>
      )}
    </select>
  )
}

export default Dropdown
