import React from 'react';

const SoundWave = ({ className }) => {
    return (
    <div className={`flex items-center justify-center my-2 h-20 ${className}`}>
     <div className='w-20 bg-conic/decreasing p-1 from-violet-700 via-lime-300 to-violet-700 h-20'>
       <div className='w-full h-full bg-gray-700 text-5xl flex justify-center items-center'>B</div>
     </div>
    </div>
    );
};

export default SoundWave;