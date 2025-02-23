import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the form data to see what you're sending
    console.log("form:", formData);

    try {
      // Sending POST request to the backend
      const response = await fetch("http://localhost:4000/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      // Checking the response from the backend
      const data = await response.json();

      if (response.ok) {
        console.log("User added successfully:", data);
      } else {
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Failed to submit data:", error);
    }
  };

  const handleStateUpdate = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Enter Detail for PostgreSQL
          </h2>
        </div>
        <form onSubmit={handleSubmit} className='mt-8 space-y-6'>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='username' className='sr-only'>
                Username
              </label>
              <input
                id='username'
                type='text'
                name='username'
                required
                autoComplete='username'
                autoFocus
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Username'
                value={formData.username}
                onChange={handleStateUpdate}
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                type='password'
                name='password'
                required
                autoComplete='current-password'
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
                value={formData.password}
                onChange={handleStateUpdate}
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
