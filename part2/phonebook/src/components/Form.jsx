import { useState } from 'react'

const Form = ( { persons, setPersons, setNumbersToShow }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)  
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)  
  }

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

  return (
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
  )
}

export default Form