"use client"
import Link from 'next/link';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '../ui/dropdown-menu';
import { MdKeyboardArrowDown } from 'react-icons/md'; // Import the down arrow icon


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container sticky top-0 z-50 flex w-full h-14 items-center justify-between overflow-hidden border-b bg-[#f5f5dc] p-4">
      {/* Left side: Brand name in a special font */}
      <div className="text-2xl font-extrabold text-black font-sans tracking-wide">
        FRUITFLEET
      </div>

      {/* Right side: Navigation Links */}
      <div className="flex space-x-6 text-black text-lg font-medium items-center">
        {/* About Us Dropdown */}
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="flex items-center cursor-pointer hover:text-gray-700 transition duration-200"
          >
            <span>About Us</span>
            <MdKeyboardArrowDown className="ml-2 text-gray-600" /> {/* Position the arrow to the right of the text */}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="mt-2 bg-white shadow-lg rounded-md"
          >
            <DropdownMenuItem asChild>
              <Link href="/how-it-works">How it Works</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/subscription-plans">The Subscription Plans</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/our-fruits">Our Fruits</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/faq">FAQ</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/sustainability">Sustainability</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Other Links */}
        <Link href="/sign_in">
          <span className="cursor-pointer hover:text-gray-700 transition duration-200">
            Sign In
          </span>
        </Link>
        <Link href="/sign_up">
          <span className="cursor-pointer bg-black text-[#f5f5dc] py-1 px-4 rounded-full hover:bg-gray-800 transition duration-200">
            Get Started
          </span>
        </Link>
      </div>
    </div>
  );
}