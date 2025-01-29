import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newSearch, setNewSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [numbersToShow, setNumbersToShow]  = useState(persons)

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    const position = persons.map(element => element.name).indexOf(newName);
    if(position !== -1) { 
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const updatedPersons = persons.concat(personObject)
      setPersons(updatedPersons)
      setNumbersToShow(updatedPersons)
      setNewName('')
      setNewNumber('')
    }
  }

  const handleSearch = (event) => {
    const Filter = event.target.value 
    setNewSearch(Filter) 
    setNumbersToShow(persons.filter(element => element.name.toLowerCase().includes(Filter.toLowerCase())))
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)  
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)  
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={newSearch} onChange={handleSearch} />
      </div>
      <h2>Add new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {numbersToShow.map(number =>
          <li key={number.id}> {number.name} {number.number} </li>
        )}
      </ul>
    </div>
  )
}

export default App