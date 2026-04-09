import React from 'react';
import AiInput from './Components/AiInput';
import Navbar from './Components/navigation/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
      <h1 className='text-center text-5xl font-bold mt-30 mb-5'>Start Bangla Voice Type</h1>
      <AiInput />
    </>
  );
};

export default App;