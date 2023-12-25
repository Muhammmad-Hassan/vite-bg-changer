import { useState } from 'react'
import './App.css'

function App() {
const [color , setColor] = useState('olive')

  return (
    <div className="container" style={{backgroundColor:color, display:'flex', alignItems:'center', justifyContent: 'center'}}>
      <div style={{}}>
      <button style={{}} onClick={()=>setColor('blue')}>blue</button>
      <button style={{backgroundColor : 'green', marginRight: 3}} onClick={() =>setColor('green')}>green</button>
      <button style={{backgroundColor : 'aqua', marginRight: 3}} onClick={() =>setColor('aqua')}>aqua</button>
      <button style={{backgroundColor : 'black', marginRight: 3}} onClick={() =>setColor('black')}>black</button>
      <button style={{backgroundColor : 'tomato', marginRight: 3}} onClick={() =>setColor('tomato')}>tomato</button>
      <button style={{backgroundColor : 'orange', marginRight: 3}} onClick={() =>setColor('orange')}>orange</button>
      </div>
    </div>
  )
}

export default App
