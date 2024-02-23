import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { currentUserSelector } from '../features/Authentication/authenticationSlice';
import { getMultipleAuthors } from '../features/Author/authorSlice';
const Layout = () => {
  const user = useSelector(currentUserSelector)
  // console.log(user.id)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getMultipleAuthors(user?.id))
  },[user])
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}

export default Layout;
