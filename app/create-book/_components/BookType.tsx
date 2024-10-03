'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export interface OptionField {
  label: string;
  imageUrl: string;
  isFree: boolean;
}

const BookType = ({ userSelection }: any) => {
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

  const [selectedOption, setSelectedOption] = useState<string>('');

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);

    userSelection({
      fieldValue: item?.label,
      fieldName: 'bookType',
    });
  };
  return (
    <div>
      <label className='font-bold text-4xl text-[#1A237E]'>2. Book Type</label>
      <div className='grid grid-cols-3 gap-5 mt-3 '>
        {optionList.map((item: OptionField, index) => (
          <div
            className={`relative grayscale hover:grayscale-0 cursor-pointer p-1
               ${
                 selectedOption == item.label
                   ? 'grayscale-0 border-2 rounded-3xl border-[#1A237E]'
                   : 'grayscale'
               }`}
            onClick={() => onUserSelect(item)}
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

export default BookType;
