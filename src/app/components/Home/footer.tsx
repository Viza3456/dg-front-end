import Link from "next/link";
import Image from "next/image";
import { footerSections, footerLinks } from "@/constants/home";

export default function Footer() {

  return (
    <div>
      <footer className="bg-black-200 text-white py-8" >
        <div className="container-screen px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo Section */}
            <div>
              <div className="flex items-center mb-4 md:mb-0">
                <Image
                  src="./images/home/logo-ft.png"  // Replace with your actual logo path
                  alt="Logo"
                  width={22}  // Adjust the size of the logo
                  height={21}
                />
                <p className="text-[32px] font-bold ml-2">teach</p>
              </div>
            </div>

            {/* Loop through footer sections */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-lg my-3">{section.title}</h4>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex space-x-1">
                          <Link href="/" className="text-white hover:text-gray-400 transition-colors duration-300">{item}</Link>
                          {item === 'Accessibility' && <span className="text-xs bg-[#F3E8FF] text-[#6B21A8] px-2 py-1 rounded-sm">BETA</span>}
                          {item === 'Request Demo' && <Image
                            src="./home/arrow-right.svg"
                            alt="arrow-right"
                            width={24}
                            height={24}
                          />}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12 border-t border-gray-800">
            <div className="mt-6 lg:flex lg:justify-between lg:items-center">
              <p className="text-white text-left md:text-left">
                uteach @ 2023. All rights reserved.
              </p>
              <div className="flex justify-between">
                <div className="flex justify-start space-x-8 mt-6 md:mt-0">
                  {footerLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`text-white hover:text-gray-400 transition-colors duration-300 
                      ${link.name === 'Contact' ? 'hidden lg:block' : ''}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="flex justify-start ml-8 space-x-8 mt-6 md:mt-0">
                  <Link href="/" className="text-white hover:text-white flex">
                    <Image
                      src="./home/world.svg"
                      alt="Logo"
                      width={24}
                      height={24}
                    />
                    <p className="ml-[8px]">EN</p>
                  </Link>
                  <Link href="/" className="text-white hover:text-white flex">
                    <div className="lg:block hidden">
                      <Image
                        src="./home/euro.svg"
                        alt="Logo"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="ml-[8px]">EUR</p>
                  </Link>
                  <Image
                    src="./home/accessibility.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}