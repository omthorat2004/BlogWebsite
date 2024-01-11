import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import UserLayout from './Layout/UserLayout'
import Login from './features/Authentication/Components/Login'
import Author from './features/Author/Components/Author'
import AuthorProfile from './features/Author/Components/AuthorProfile'
import Blogs from './features/Home/Components/Blogs'
import Home from './features/Home/Components/Home'
import ProfileCard from './features/UserProfile/Components/Card'
import UserProfile from './features/UserProfile/Components/UserProfile'
function App() {
  const [count, setCount] = useState(0)
const router = createBrowserRouter([
  {path:'/login',element:<Login/>},
  {path:'/',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'authors',element:<Author/>},
    {path:'profile',element:<UserLayout/>,children:[
      {index:true,element:<UserProfile children={<ProfileCard/>}/>},
      {path:'blogs',element:<UserProfile children={<Blogs/>}/>},
      {path:'like',element:<UserProfile children={<Blogs/>}/>},
      {path:'following',element:<UserProfile children={<Author/>}/>},
      {path:'bookmarks',element:<UserProfile children={<Blogs/>}/>}
    ]},
    {path:'author/1',element:<AuthorProfile/>}
  ]},
 
])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
