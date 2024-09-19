import { Button } from '@nextui-org/button';
import Image from 'next/image';
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
      <div className='relative z-10 px-10 md:px-28 lg:px-44 mt-10 h-full flex items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            <h2 className='text-[70px] text-[#1A237E] font-extrabold drop-shadow-lg'>
              Create your own Magical Book in Minutes
            </h2>
            <p className='text-2xl text-purple-800 font-light'>
              Create fun and personalised stories that bring your child's
              adventures to life and spark their passion for reading. It only
              takes a few seconds!
            </p>
          </div>
          <div>
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
