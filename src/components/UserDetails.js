import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

const UserDetails = () => {
  const { state } = useLocation();
  console.log(state)


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">id:</label>
          <p>{state?.id}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <p>{state?.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <p>{state?.email}</p>
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
          <p>{state?.phone}</p>
        </div>
       
      </div>
    </div>
  );
};

export default UserDetails;