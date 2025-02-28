import Image from "next/image";
import { bannerIcons } from "@/constants/home";

export default function Student() {

  return (
    <div className="my-20">
      <div className="container-screen lg:flex space-y-8 justify-between">
        <div className="max-w-[600px]">
          <div className="max-h-[326px]">
            <p className="text-[40px] lg:text-[56px] leading-[1.2] text-black-200 font-extrabold">Teach students worldwide</p>
            <p className="text-base lg:text-xl text-black-200 mt-8">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
          </div>
          <div className="flex items-center space-x-8 my-8 cursor-pointer">
            <button className="hover:bg-red-600 transition-colors duration-300 w-[180px] lg:w-[239px] h-[56px] lg:h-[64px] text-xl lg:text-2xl font-bold rounded-lg bg-red-300 text-white">
              Sign Up Now
            </button>
            <button className="flex items-center w-[180px] lg:w-[239px] h-[56px] lg:h-[64px] text-lg lg:text-xl text-[#2563EB]">
              <Image
                className="mr-4"
                src="/home/play-circle.svg"
                alt="play-circle"
                width={24}
                height={24}
              />
              <p>View Demo</p>
            </button>
          </div>
          <div className="mt-20 lg:flex justify-between">
            <p className="text-base text-gray-600 lg:w-[135px]">Trusted by
              leading companies</p>
            {bannerIcons.map((src, index) => (
              <Image
                key={index}
                className="w-[28px] h-[32px] hidden lg:block"
                src={src}
                alt="point"
                width={28}
                height={32}
              />
            ))}
            <div className="lg:hidden flex mt-3 space-x-3">
              {bannerIcons.map((src, index) => (
                <Image
                  key={index}
                  className="w-[28px] h-[32px]"
                  src={src}
                  alt="point"
                  width={28}
                  height={32}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/home/point.png"
            alt="point"
            width={624}
            height={544}
          />
        </div>
      </div>
    </div>
  );
}