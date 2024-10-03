'use client';

import React, { useState } from 'react';
import BookSubjectInput from './_components/BookSubjectInput';
import BookType from './_components/BookType';
import AgeGroup from './_components/AgeGroup';
import ImageStyle from './_components/ImageStyle';
import { Button } from '@nextui-org/button';
import { chatSession } from '@/config/GeminiAi';

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}

export interface formDataType {
  storySubject: string;
  storyType: string;
  imageStyle: string;
  ageGroup: string;
}

const CreateBook = () => {
  const [formData, setFormData] = useState<formDataType>({
    storySubject: '',
    storyType: '',
    imageStyle: '',
    ageGroup: '',
  });

  const [loading, setLoading] = useState(false);

  const onHandleUserSelection = (data: fieldData) => {
    setFormData((prev: formDataType) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
  };

  // console.log('Form Data Updated:', formData);

  const generateBook = async () => {
    setLoading(true);

    const FINAL_PROMPT = CREATE_STORY_PROMPT?.replace(
      '{ageGroup}',
      formData?.ageGroup ?? ''
    )
      .replace('{storyType}', formData?.storyType ?? '')
      .replace('{imageStyle}', formData?.imageStyle ?? '')
      .replace('{storySubject}', formData?.storySubject ?? '');
    //generate AI story
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log(result?.response.text());
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
    //save all in DB
    //generate Image
  };

  return (
    <div className='bg-[#80adaf] p-10 md:px-20 lg:px-40'>
      <h2 className='font-extrabold  text-[70px] text-[#1A237E] text-center'>
        CREATE YOUR BOOK
      </h2>
      <p className='text-2xl text-[#1A237E] text-center'>
        "Unlock your creativity with AI: Create stories like never before! Let
        our AI bring your stories to life, one by one.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14'>
        {/* Book Subject */}
        <BookSubjectInput userSelection={onHandleUserSelection} />
        {/* Book Type */}
        <BookType userSelection={onHandleUserSelection} />
        {/* Age Group */}
        <AgeGroup userSelection={onHandleUserSelection} />
        {/* Image Style */}
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>

      <div className='flex justify-end my-10'>
        <Button
          disabled={loading}
          className='hover:text-[#FF7043] bg-blue-700 text-white p-10 text-2xl'
          onClick={generateBook}
        >
          Generate Book
        </Button>
      </div>
    </div>
  );
};

export default CreateBook;
