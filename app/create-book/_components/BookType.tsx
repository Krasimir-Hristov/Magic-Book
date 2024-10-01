import Image from 'next/image';
import React from 'react';

const BookType = () => {
  const optionList = [
    {
      label: 'Story Book',
      imageUrl: '/bedstory.png',
      isFree: true,
    },
    {
      label: 'Bed Story',
      imageUrl: '/bedstory.png',
      isFree: true,
    },
    {
      label: 'Educational',
      imageUrl: '/bedstory.png',
      isFree: true,
    },
  ];

  return (
    <div>
      <label className='font-bold text-4xl text-[#1A237E]'>2. Book Type</label>
      <div className='grid grid-cols-3 gap-5 mt-3 '>
        {optionList.map((item, index) => (
          <div className='relative grayscale hover:grayscale-0 cursor-pointer'>
            <h2 className='absolute bottom-5 text-white text-xl font-bold text-center w-full'>
              {item.label}
            </h2>
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={300}
              height={400}
              className='object-cover h-[260px] rounded-3xl'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookType;
