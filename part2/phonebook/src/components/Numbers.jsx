const Numbers = ({ numbersToShow }) => {
    return(
      <ul>
      {numbersToShow.map(number =>
          <li key={number.id}> {number.name} {number.number} </li>
        )}
      </ul>
    )
  }

  export default Numbers