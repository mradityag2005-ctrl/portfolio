import React from 'react';

const Profile = () => {
  return (
    <div className="relative w-40 h-40 mx-auto">
      <img
        src="/profile.png"
        alt="Aditya Gupta"
        className="w-full h-full object-cover rounded-full"
        onError={(e) => {
          console.error('Image failed to load');
          console.log('Image path:', e.target.src);
        }}
      />
    </div>
  );
};

export default Profile;