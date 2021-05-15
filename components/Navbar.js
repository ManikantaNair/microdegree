import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    setShow(!show);
  };
  return (
    <>
      <nav className='flex justify-between items-center shadow h-16'>
        <div className='px-2 pt-1 mx-3 cursor-pointer'>
          <Link href='/'>
            <Image
              src='/microdegreelogo.png'
              alt='logo'
              width={150}
              height={40}
            />
          </Link>
        </div>
        <div className='mx-3 sm:hidden'>
          <MenuIcon
            className='h-7 w-7 text-black-400 cursor-pointer'
            onClick={handleClick}
          />
        </div>
        <ul className='hidden sm:flex mx-3'>
          <li className='mx-3'>
            <Link href='/courses' className='text-black-300'>
              <a className='text-black'> Courses</a>
            </Link>
          </li>
          <li className='mx-3'>
            <Link href='/testimonial'>Testimonial</Link>
          </li>
          <li className='mx-3'>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className='mx-3'>
            <Link href='/community'>Community</Link>
          </li>
          <li className='mx-3'>
            <Link href='/scholarship'>Scholarship</Link>
          </li>
          <li className='mx-3'>
            <Link href='/login'>
              <a className='text-regal-red font-bold uppercase px-4 py-1 rounded border border-regal-red'>
                Login
              </a>
            </Link>
          </li>
          <li className='mx-3'>
            <Link href='/login'>
              <a className='bg-regal-red text-gray-100 font-bold uppercase px-4 py-1 mx-1 rounded border border-regal-red hover:bg-red-700 '>
                9945514497
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      {show && (
        <ul className='w-full flex flex-col  items-center bg-gray-100 h-h-nav pt-5 sm:hidden'>
          <li className='mt-3'>
            <Link href='/courses'>
              <a className='p-1 text-xl'>Courses</a>
            </Link>
          </li>
          <li className='mt-3'>
            <Link href='/testimonial'>
              <a className='p-1 text-xl'>Testimonial</a>
            </Link>
          </li>
          <li className='mt-3'>
            <Link href='/blog'>
              <a className='p-1 text-xl'>Blog</a>
            </Link>
          </li>
          <li className='mt-3'>
            <Link href='/community'>
              <a className='p-1 text-xl'>Community</a>
            </Link>
          </li>
          <li className='mt-5'>
            <Link href='/login'>
              <a className='text-regal-red font-bold uppercase px-4 py-1 rounded border border-regal-red'>
                Login
              </a>
            </Link>
          </li>
          <li className='mt-5'>
            <Link href='/login'>
              <a className='bg-regal-red text-gray-100 font-bold uppercase px-4 py-1 mx-1 rounded border border-regal-red hover:bg-red-700 '>
                9945514497
              </a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
