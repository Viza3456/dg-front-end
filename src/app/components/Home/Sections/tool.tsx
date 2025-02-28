import Image from "next/image";
import { desktopIcons } from "@/constants/home";

export default function Tool() {

  return (
    <div className="bg-gray-100 py-12 md:py-0 md:h-[1100px] w-full relative">
      {/* Blob Image (Background) */}
      <Image
        className="hidden md:block absolute top-8 right-0 w-[370px] h-[768px]"
        src="./images/home/Blob-Group.png"
        alt="blob"
        width={370}
        height={768}
      />
      <Image
        className="hidden md:block absolute top-64 left-14 w-[561px] h-[580px]"
        src="./images/home/blob-left.png"
        alt="blob"
        width={561}
        height={580}
      />

      <Image
        className="hidden md:block absolute 2xl:left-44 3xl:left-80 bottom-32 w-[1093px] h-[78px]"
        src="./images/home/Lines.png"
        alt="blob"
        width={1093}
        height={78}
      />


      {/* Content Positioned on Top of Blob */}
      <div className="md:absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="container-screen">
          <div className="max-w-[900px] lg:text-center">
            <p className="text-xl lg:text-[56px] text-black-200 font-extrabold">All the tools that you need</p>
            <p className=" text-lg lg:text-xl text-black-200 mt-8">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
              Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
            </p>
          </div>
        </div>

        {/* Main Image */}
        <div className="container-screen">
          <Image
            className="mt-10 w-[1100px] h-full"
            src="./images/home/page.png"
            alt="page"
            width={1100}
            height={640}
          />
        </div>

        {/* Footer Icons */}
        <div className="padding-left-responsive w-full">
          <div className="flex gap-20 mt-10 overflow-x-auto scrollbar-hidden py-2">
            {desktopIcons.map((icon, index) => (
              <div
                key={index}
                className="min-w-[64px] min-h-[64px] cursor-pointer rounded-lg p-2 border border-gray-300 bg-white shadow-md flex items-center justify-center hover:scale-105 transition duration-300"
              >
                <Image src={icon} alt={`icon-${index}`} width={40} height={40} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}