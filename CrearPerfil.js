import React from 'react';

const CrearPerfil = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-96 h-80 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <button className="text-gray-600 text-2xl">×</button>
          <h2 className="font-bold text-center flex-1">Create your profile</h2>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-center">
          <img src="/Airbnb4.png" alt="Airbnb Logo" className="w-16 h-16" />
        </div>
        <div className="text-center mt-4">
          <h3 className="font-bold">Welcome to Airbnb</h3>
          <p className="text-sm text-gray-600">
            Discover places to stay and unique experiences around the world
          </p>
        </div>
        <button className="bg-black text-white w-full py-2 mt-6 rounded-lg">Continue</button>
      </div>
    </div>
  );
};

export default CrearPerfil;