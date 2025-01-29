import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [numbersToShow, setNumbersToShow]  = useState(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter  persons={persons} setNumbersToShow={setNumbersToShow} />
      <h2>Add new</h2>
      <Form persons={persons} setPersons={setPersons} setNumbersToShow={setNumbersToShow} />
      <h2>Numbers</h2>
      <Numbers numbersToShow={numbersToShow} />
    </div>
  )
}

export default App