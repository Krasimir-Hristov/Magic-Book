import { ClerkProvider } from '@clerk/nextjs';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import Header from './_components/Header';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <NextUIProvider>
        <Header />
        {children}
      </NextUIProvider>
      ;
    </ClerkProvider>
  );
};

export default Provider;
