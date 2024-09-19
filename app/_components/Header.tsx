'use client';

import React, { useState } from 'react';

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
import path from 'path';
import Link from 'next/link';
import { Button } from '@nextui-org/button';

const Header = () => {
  const menuList = [
    { name: 'Home', path: '/' },
    { name: 'Create Book', path: '/create-book' },
    { name: 'Explore Books', path: '/explore' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      maxWidth='full'
      className='bg-[#E0F7FA] justify-between'
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          className='sm:hidden text-blue-700'
        />
        <NavbarBrand>
          <Image
            src={'/logo.svg'}
            alt='Logo'
            width={40}
            height={40}
            className='text-[#FF7043] '
          />

          <h2 className='font-bold text-2xl text-blue-700 ml-3'>Magic Book</h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify='center' className='hidden sm:flex'>
        {menuList.map((item, index) => (
          <NavbarItem className='text-xl text-primary font-medium mx-2 hover:underline'>
            <Link className='text-[#1A237E]' href={item.path}>
              {item.name}{' '}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify='end'>
        <Button className='hover:text-[#FF7043] bg-blue-700 text-white'>
          {' '}
          Get Started
        </Button>
      </NavbarContent>

      <NavbarMenu>
        {menuList.map((item, index) => (
          <NavbarMenuItem>
            <Link href={item.path} className='text-[#FF7043]'>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
