import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className='relative h-screen'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-30 h-full'
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      ></div>

      {/* Content */}
      <div className='relative z-10 px-6 sm:px-12 md:px-24 lg:px-36 mt-10 h-screen flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col items-center text-center md:text-left md:items-start md:w-1/2'>
          <h2 className='text-3xl md:text-5xl lg:text-6xl text-[#1A237E] font-extrabold drop-shadow-lg'>
            Create your own Magical Book in Minutes
          </h2>
          <p className='text-lg md:text-xl lg:text-2xl text-purple-800 font-light mt-4 md:mt-6 lg:mt-8'>
            Create fun and personalised stories that bring your child's
            adventures to life and spark their passion for reading. It only
            takes a few seconds!
          </p>
        </div>
        <div className='mt-8 md:mt-0 md:w-1/2 text-center md:text-left'>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-[#FF7043]'>
            Time to Create Your Magical Book!
          </h2>
          <Link href={'/create-book'}>
            <Button
              size='lg'
              className='hover:text-[#FF7043] bg-blue-700 font-bold text-2xl p-8 text-white mt-6 md:mt-8 lg:mt-10'
            >
              Create your Book
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
