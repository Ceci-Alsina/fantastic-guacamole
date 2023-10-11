import React from 'react';

const RegistroB = () => {
  return (

    <div className="bg-white p-8 max-w-md mx-auto my-8 rounded-md shadow-md">
      <div className="text-blue-500 text-3xl absolute top-0 left-0 mt-4 ml-4"> &gt; </div>
      <h1 className="text-xl font-bold text-center mt-4">Finish signing up</h1>
      <div className="mt-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full bg-gray-100 border rounded-md py-2 px-4"
        />
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Last Name"
          className="w-full bg-gray-100 border rounded-md py-2 px-4"
        />
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Birthdate"
          className="w-full bg-gray-100 border rounded-md py-2 px-4"
        />
      </div>

      <div className="mt-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-100 border rounded-md py-2 px-4"
        />
      </div>

      <div className="mt-4">
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-100 border rounded-md py-2 px-4 pr-10"
          />
          <a href="#" className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black-500 text-sm font-bold hover:underline">Show</a>
        </div>
      </div>

      <p className="text-xs mt-4">
        By selecting Agree and continue, I gree tp Airbnb's <a href="#" className="text-blue-500 hover:underline">Terms of Service, Payments Terms of Service and Nondiscrimination Policy</a>
        and acknowledge the  Agree and Continue <a href="#" className="text-blue-500 hover:underline">Privacy Policy.</a>
      </p>

      <button className="bg-red-500 text-white w-full py-2 px-4 rounded-md mt-6 hover:bg-red-600">
        Agree and Continue
      </button>
    </div>
  );

}

export default RegistroB;