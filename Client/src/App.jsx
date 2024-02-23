import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthRoute from './AuthRoute'
import Layout from './Layout/Layout'
import PrivateRoute from './PrivateRoute'
import { Login, Register, Sign } from './features/Authentication/Components'
import EmailVerify from './features/Authentication/Components/EmailVerify'
import { privateRoutes, publicRoutes } from './routes'
function App() {
  
  
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
          {publicRoutes.map((route)=>{
            return <Route key={route.path} path={route.path} element={route.element} />
          })}
           
            <Route element={<PrivateRoute/>} >
            {
              privateRoutes.map((route)=>{
                return <Route key={route.path} path={route.path} element={route.element}/>
              })
            }
            </Route>
          </Route>
          <Route element={<AuthRoute/>}>
            <Route path='/sign' element={<Sign/>}/>
            <Route path='/login' element={<Login/>}/>
          </Route>
          <Route path='/register' element={<Register/>}/>
          <Route path='/verify-email' element={<EmailVerify/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
