import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Provider;
