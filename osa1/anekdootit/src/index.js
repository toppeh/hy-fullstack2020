import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>
const VoteCount = ({count}) => {
  if (count === 1) return <p>has {count} vote</p>
  return (
    <p>has {count} votes</p>
  )
}
const Header = ({text}) => <h1>{text}</h1>


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState(0)

  const handleGet = () => {
    setSelected(Math.floor(Math.random()*6))
  }
  
  const handleVote = () => {
    const copy = { ...votes }
    copy[selected] += 1
    // Hassu sääntö ainakin vielä tässä vaiheessa tämä hookin päivitys top levelillä-pakko
    let newMostVotes
    if (copy[selected] > copy[mostVotes]) newMostVotes = selected
    else newMostVotes = mostVotes

    setVotes(copy)
    setMostVotes(newMostVotes)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Button text="get" handleClick={handleGet} />
      <Button text="vote" handleClick={handleVote} />
      <div></div>
      {props.anecdotes[selected]}
      <VoteCount count={votes[selected]} />

      <Header text="Anecdote with the most votes" />
      {props.anecdotes[mostVotes]}  
      <VoteCount count={votes[mostVotes]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)