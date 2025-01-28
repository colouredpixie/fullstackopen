const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />     
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return <h2>{course.name}</h2>
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )}      
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({ parts }) => {
  const initialValue = 0;
  let sumOfExercises = parts.reduce((accumulator, currentValue) => {
      const number = currentValue.exercises
      return accumulator + number
    },
    initialValue
  )
  return <p><b>total of {sumOfExercises} exercises</b></p>
}
  
export default Course