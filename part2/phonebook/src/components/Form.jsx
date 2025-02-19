import { useState } from 'react'
import phonebookService from 'C:/Users/olena.solontsova/Documents/Probation/fullstackopen/part2/phonebook/src/services/phonebook'

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
      id: (+persons.at(-1).id + 1).toString()
    }
    const position = persons.map(element => element.name).indexOf(newName);
    if(position !== -1) { 
      if(confirm(`${newName} is already added to phonebook. Do you want to update the number?`)) {
        phonebookService      
        .update(persons.at(position).id, personObject)      
        .getAll()
        .then(updatedPersons => {
          setPersons(updatedPersons)
          setNumbersToShow(updatedPersons)
          setNewName('')
          setNewNumber('')     
        })
      }
    }
    else {
      phonebookService      
        .create(personObject)      
        .then(response => {    
          console.log(response.data)
          const updatedPersons = persons.concat(personObject)    
          setPersons(updatedPersons)        
          setNumbersToShow(updatedPersons)
          setNewName('')
          setNewNumber('')      
        })
        .catch(error => {
          console.log(error)
        })
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