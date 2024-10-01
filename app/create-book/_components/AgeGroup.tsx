import Image from 'next/image';
import React, { useState } from 'react';

const AgeGroup = () => {
  const optionList = [
    {
      label: '0-5 Years',
      imageUrl: '/bedstory.png',
      isFree: true,
    },
    {
      label: '5-10 Years',
      imageUrl: '/bedstory.png',
      isFree: true,
    },
    {
      label: '10-15 + Years',
      imageUrl: '/bedstory.png',
      isFree: true,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <div>
      <label className='font-bold text-4xl text-[#1A237E]'>3. Age Group</label>
      <div className='grid grid-cols-3 gap-5 mt-3 '>
        {optionList.map((item, index) => (
          <div
            className={`relative grayscale hover:grayscale-0 cursor-pointer p-1
               ${
                 selectedOption == item.label
                   ? 'grayscale-0 border-2 rounded-3xl border-[#1A237E]'
                   : 'grayscale'
               }`}
            onClick={() => setSelectedOption(item.label)}
          >
            <h2 className='absolute bottom-5 text-white text-xl font-bold text-center w-full'>
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={300}
              height={500}
              className='object-cover h-[260px] rounded-3xl'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgeGroup;
