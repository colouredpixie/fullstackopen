import { useState } from 'react'

const Filter = ({ persons, setNumbersToShow }) => {
  const [newSearch, setNewSearch] = useState('')

  const handleSearch = (event) => {
    const Filter = event.target.value 
    setNewSearch(Filter) 
    setNumbersToShow(persons.filter(element => element.name.toLowerCase().includes(Filter.toLowerCase())))
  }
  
  return (
    <div>
    filter shown with: <input value={newSearch} onChange={handleSearch} />
    </div>  
  )
}

export default Filter