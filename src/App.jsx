import React from 'react';
import AiInput from './Components/AiInput';
import Navbar from './Components/navigation/Navbar';
import MyCp from './Components/MyCp';
import SoundWave from './Components/SoundWave';


const App = () => {
  return (
    <>
    <Navbar />
      <SoundWave className={`mt-10`}/>
      <h1 className='text-center text-5xl font-bold mb-5'>Start Bangla Voice Type</h1>
      <AiInput />
    </>
  );
};

export default App;