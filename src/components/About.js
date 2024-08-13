import React, { useContext } from 'react';
import User from './User';
import UserClass from './UserClass';
import User from './User';
import UserContext from './utils/UserContext';

const About = () => {
  const {loggedInUser,setUserName}=useContext(UserContext)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-500">This is about page</p>
      <UserClass name="Ragu" location="Bangalore" />
      <User name="Venkat" location="Pollachi"/>
      <input className="border border-black" type="text" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>
    </div>
  );
};

export default About;
