import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Author from './features/Author/Components/Author'
import AuthorProfile from './features/Author/Components/AuthorProfile'
import Home from './features/Home/Components/Home'
import UserProfile from './features/UserProfile/Components/UserProfile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/authors' element={<Author/>}/>
          <Route path='/profile' element={<UserProfile/>}/>
          <Route path='/author/1' element={<AuthorProfile/>}/>
      </Routes>
     </Router>
     
    </>
  )
}

export default App
