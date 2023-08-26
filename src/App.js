import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Create />}/>
      <Route path='/read' element={<Read />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App