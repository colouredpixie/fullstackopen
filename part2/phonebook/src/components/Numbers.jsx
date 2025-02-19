import phonebookService from 'C:/Users/olena.solontsova/Documents/Probation/fullstackopen/part2/phonebook/src/services/phonebook'

const Numbers = ({ setPersons, numbersToShow, setNumbersToShow }) => {
    return(
      <ul>
      {numbersToShow.map(number =>
          <li key={number.id}> {number.name} {number.number} <button onClick={() => { 
            phonebookService.deleteId(number.id)
            setNumbersToShow(numbersToShow.filter(updatedElement => updatedElement.id !== number.id))
            setPersons(numbersToShow.filter(updatedElement => updatedElement.id !== number.id)) 
            }}> delete </button>
          </li>
        )}
      </ul>
    )
  }

  export default Numbers