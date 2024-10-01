import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-[#80adaf]  min-h-screen overflow-hidden'>
      {/* Image container */}
      <div className='flex justify-center items-center p-4 md:p-8'>
        <Image
          src={'/mblogin.png'}
          alt='login'
          width={700}
          height={1000}
          className='w-full h-auto max-w-xs md:max-w-full'
        />
      </div>

      {/* SignIn form container */}
      <div className='flex flex-col justify-center items-center p-4 md:p-8'>
        <SignIn />
      </div>
    </div>
  );
}
