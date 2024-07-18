import React, { useState } from 'react';
import './App.css';
import ProfilePage from './components/ProfilePage';
import EditProfileForm from './components/EditProfileForm';
import Navbar from './components/Navbar';

function App() {
  const [userProfile, setUserProfile] = useState({
    name: 'Name & Surname',
    email: 'mail@example.com',
    birthDate: '00.00.0000',
    profession: 'Your profession',
    university: 'University',
    phoneNumber: '000 000 000',
    country: 'Country',
    city: 'City',
    bio: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias dolor debitis repellendus explicabo dolorum? 
    Pariatur dignissimos facere laudantium consequuntur, dolorum accusamus. Exercitationem voluptatem quas, at voluptate 
    rerum est, debitis dolor doloribus quaerat iure culpa placeat sint. Nihil officiis, dolores incidunt inventore 
    blanditiis voluptatum nemo temporibus at pariatur est doloremque id nobis, ex repellendus saepe reiciendis hic 
    impedit alias quis amet?`,
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://x.com/home',
    github: 'https://github.com/',
    photo: null,
  });

  const [editMode, setEditMode] = useState(false);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
    setEditMode(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ProfilePage userProfile={userProfile} onEdit={handleEditProfile} />
        {editMode && (
          <EditProfileForm userProfile={userProfile} onSave={handleSaveProfile} onClose={() => setEditMode(false)} />
        )}
      </header>
    </div>
  );
}

export default App;
