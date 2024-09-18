import React from 'react';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import Image from 'next/image';

const Header = () => {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <Image src={'/logo.svg'} alt='Logo' width={40} height={40} />
          <h2 className='font-bold text-2xl text-primary ml-3'>Magic Book</h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent></NavbarContent>
    </Navbar>
  );
};

export default Header;
