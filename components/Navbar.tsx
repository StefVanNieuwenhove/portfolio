import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
  const links = [
    {
      name: 'Projects',
      url: 'projects',
    },
    {
      name: 'Tech',
      url: 'tech',
    },
    {
      name: 'About me',
      url: 'aboutme',
    },
    {
      name: 'Contact',
      url: 'contact',
    },
  ];
  return (
    <header className='w-full h-10 flex items-center justify-between px-5 py-3'>
      <Sheet>
        <SheetTrigger asChild>
          <Button className='lg:hidden' size='icon' variant='ghost'>
            <Menu className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <Link className='mr-6 lg:flex' href='/'>
            <h1 className='pt-3 text-xl font-semibold'>Stef Van Nieuwenhove</h1>
            <Separator />
          </Link>
          <div className=''>
            {links.map((link) => (
              <Link
                key={link.url}
                className='flex w-full items-center py-2 text-lg font-semibold'
                href={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div className='w-full md:flex items-center justify-between px-5 py-5 hidden'>
        <Link href={'/'} className='text-xl font-bold'>
          Stef Van Nieuwenhove
        </Link>
        <nav className='w-1/2 flex justify-around'>
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className='hover:underline font-semibold'>
              {link.name}
            </Link>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
