import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import "./App.css";
import CommonLoading from './Components/Loading/CommonLoading';
import { store } from './store';
const AppContainer = () => {
  
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const ErrorComponent = ({message})=>{
      return <div className='flex h-100 justify-center align-items-center'>
              <h2 className='c-red'>{message} please come after sometime....</h2>
              </div>
    }
    useEffect(()=>{
      const checkServer = async()=>{
        try{
          setLoading(true)
          const response = await fetch('http://localhost:3000/server-status')
         
          if(!response.ok){
            throw new Error("Error occurred")
          }
        }catch(err){
          setError(true)
        }finally{
          setLoading(false)
        }
      }
      checkServer()
    },[])
    if(loading||error){
      return loading?<CommonLoading/>:<ErrorComponent message='Server is not ready'/>
    }
  return (
    <>
      <Provider store={store}>
        <App/>
      </Provider>
    </>
  );
}

export default AppContainer;
