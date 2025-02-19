import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Numbers from './components/Numbers'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [numbersToShow, setNumbersToShow]  = useState(persons)

  useEffect(() => {
    phonebookService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
      setNumbersToShow(initialPersons)
    })

  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter  persons={persons} setNumbersToShow={setNumbersToShow} />
      <h2>Add new</h2>
      <Form persons={persons} setPersons={setPersons} setNumbersToShow={setNumbersToShow} />
      <h2>Numbers</h2>
      <Numbers  setPersons={setPersons} numbersToShow={numbersToShow}  setNumbersToShow={setNumbersToShow} />
    </div>
  )
}

export default App