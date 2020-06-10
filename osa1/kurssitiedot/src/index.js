import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>{props.text} {props.exercises}</p>
) 

const Content = (props) => {
  return (
    <div>
      <Part text={props.text1} exercises={props.exercises1}/>
      <Part text={props.text2} exercises={props.exercises2}/>
      <Part text={props.text3} exercises={props.exercises3}/>
    </div>
  )
}

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content text1={part1} exercises1={exercises1} text2={part2} exercises2={exercises2} text3={part3} exercises3={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))