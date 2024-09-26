import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-[#80adaf]'>
      <div className='flex justify-center items-center h-screen'>
        <SignIn />
      </div>
    </div>
  );
}
