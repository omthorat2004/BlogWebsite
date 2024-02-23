import React from 'react';
import { useSelector } from 'react-redux';
import AuthorCard from '../../../Components/AuthorCard';
import { authorsSelector } from '../authorSlice';
const AuthorList = () => {
  const authors = useSelector(authorsSelector)

  
  return (
    <>

    {authors.map((author)=>{
        return <AuthorCard key={author.id} id={author.id} name={author.name} about={author.about} photoUrl={author.photoUrl} followerId={author.follower_id}/>
    })}
    </>
  );
}

export default AuthorList;
