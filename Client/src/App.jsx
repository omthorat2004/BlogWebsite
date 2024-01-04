import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Author from './features/Author/Components/Author'
import Home from './features/Home/Components/Home'
import UserProfile from './features/UserProfile/Components/UserProfile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/author' element={<Author/>}/>
          <Route path='/profile' element={<UserProfile/>}/>
      </Routes>
     </Router>
     
    </>
  )
}

export default App
