import React, { useState, useEffect } from 'react';

function UserCard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  if (!user) {
    return <div>Loading...!</div>;
  }

  return (
    <div className="bg-[#07424880] p-6 rounded-lg shadow-md mx-auto w-[700px] my-20">
      <div className='border-2 border-solid border-[#eef2f280] p-4 rounded-md'>
        <div className="flex space-x-10 leading-10">
        <img
          className="w-32 h-32 rounded-lg object-cover"
          src={user.picture.large}
          alt={user.name.first}
        />
        <div className='text-white'>
          <h2 className="text-2xl font-bold">{user.name.first} {user.name.last}</h2>
          <p className="capitalize text-lg">{user.gender}</p>
           <p className="font-bold text-xl">Phone Number: {user.phone}</p>
        </div>
      </div>
      </div>

    </div>
    
  );
}

export default UserCard;
