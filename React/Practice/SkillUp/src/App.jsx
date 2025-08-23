import './App.css';
import React from 'react'
import Data from './Component/Data';
const Person =[
  {id:1, name:'Arbin', address: 'kirtipur', college:'s.s college'},
  {id:2, name:'Arbin', address: 'kirtipur', college:'s.s college'},
  {id:3, name:'Arbin', address: 'kirtipur', college:'s.s college'},
  {id:4 ,name:'Arbin', address: 'kirtipur', college:'s.s college'},
  {id:5, name:'Arbin', address: 'kirtipur', college:'s.s college'},
]
function App() {
  return (
    <>
      <Data people = {Person} />
    </>
  )
}

export default App
