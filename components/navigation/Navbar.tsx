import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur'>
      <h1>
        SVN Consulting <span>.</span>
      </h1>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
      </nav>
    </header>
  );
};

export default Navbar;
