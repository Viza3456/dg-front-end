import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/constants/home";

export default function Header() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="w-full bg-white shadow-md">
        <div className="container-screen flex items-center justify-between py-6 px-6">
          <div className="flex space-x-12 items-center">
            <Link href="/" className="text-2xl font-bold">
              <Image src="./images/home/logo.png" alt="Logo" width={103} height={35} />
            </Link>
            <nav className="hidden md:flex space-x-6 text-base">
              {navItems.map((item, index) => (
                <Link key={index} href={item.href} className="text-black-200 hover:text-blue-500 flex items-center">
                  <span>{item.name}</span>
                  {item.icon && <Image src={item.icon} alt="Dropdown" width={24} height={24} />}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-black-200 hover:text-blue-500">
              Login
            </Link>
            <Link
              href="/"
              className="border-2 border-black-200 text-black-200 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white hover-scale"
            >
              Sign Up Now
            </Link>
          </div>
          {/* Mobile Menu Placeholder */}
          <button className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}>
            <Image src="/home/bar.svg" alt="bar" width={24} height={24} />
          </button>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg absolute top-16 left-0 w-full z-50 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col space-y-4 p-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-black-200 hover:text-blue-500 flex items-center"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              <span>{item.name}</span>
              {item.icon && <Image src={item.icon} alt="Dropdown" width={24} height={24} />}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}