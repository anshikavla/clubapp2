
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Profile from './Profile';
import './styles.css';
const Profile_main = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Profile/>
      </main>
      {/* Include your footer here */}
    </div>
  );
};

export default Profile_main;
