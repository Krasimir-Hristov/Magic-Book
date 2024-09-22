import { ClerkProvider } from '@clerk/nextjs';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <NextUIProvider>{children}</NextUIProvider>;
    </ClerkProvider>
  );
};

export default Provider;
