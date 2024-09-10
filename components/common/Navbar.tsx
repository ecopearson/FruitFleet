"use client";
import Link from 'next/link';
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '../ui/dropdown-menu';
import { MdKeyboardArrowDown } from 'react-icons/md'; // Import the down arrow icon

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex w-full h-16 items-center justify-between bg-white shadow-md px-8 py-4 border-b border-gray-200">
      
      {/* Left side: Brand name as a Home button */}
      <Link href="/" passHref>
        <span className="text-2xl font-semibold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-300">
          FRUITFLEET
        </span>
      </Link>

      {/* Right side: Navigation Links */}
      <div className="flex space-x-6 items-center">
        {/* About Us Dropdown */}
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="flex items-center text-gray-800 cursor-pointer hover:text-gray-900 transition duration-300"
          >
            <span className="text-sm font-medium">About Us</span>
            <MdKeyboardArrowDown className="ml-2 text-gray-500" /> {/* Arrow icon color */}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="mt-2 bg-white shadow-lg rounded-md border border-gray-200"
          >
            <DropdownMenuItem asChild>
              <Link href="/how-it-works" className="text-gray-800 hover:bg-gray-100">
                How it Works
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/subscription-plans" className="text-gray-800 hover:bg-gray-100">
                The Subscription Plans
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/our-fruits" className="text-gray-800 hover:bg-gray-100">
                Our Fruits
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/faq" className="text-gray-800 hover:bg-gray-100">
                FAQ
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/sustainability" className="text-gray-800 hover:bg-gray-100">
                Sustainability
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Other Links */}
        <Link href="/sign_in">
          <span className="text-sm text-gray-800 hover:text-gray-900 cursor-pointer transition duration-300">
            Sign In
          </span>
        </Link>
        <Link href="/sign_up">
          <span className="bg-black text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-gray-800 transition duration-300">
            Get Started
          </span>
        </Link>
      </div>
    </div>
  );
}
