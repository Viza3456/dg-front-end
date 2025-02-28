import Image from "next/image";
import { cardData } from "@/constants/home";

export default function Comment() {

  return (
    <div className="my-20">
      <div>
        <div className="flex justify-between items-center container-screen px-6">
          <p className="text-2xl lg:text-[56px] text-black-200 font-extrabold">What everyone says</p>
          <div className="flex space-x-6">
            <Image
              src="./home/chevron-left.svg"
              alt="chevron-left"
              width={48}
              height={48}
            />
            <Image
              src="./home/chevron-left.svg"
              alt="chevron-right"
              width={48}
              height={48}
            />
          </div>
        </div>
        <div className="mt-16 mb-28">
          <div className="flex space-x-6 py-4 overflow-x-auto scrollbar-hidden padding-left-responsive">
            {cardData.map((card, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-[0px_0px_6px_0px_#0000001A] bg-white p-8 min-w-[412px] h-full max-w-[412px]">
                {/* Card content */}
                <div className="mb-4">
                  <p className="text-gray-600 text-lg">
                    {card.description}
                  </p>
                </div>

                {/* Card footer with name and title */}
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <Image
                      className="w-12 h-12 rounded-full object-cover"
                      src={card.image}
                      alt={card.name}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-xl text-gray-800">{card.name}</p>
                    <p className="text-gray-500">{card.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-screen px-6 flex lg:flex-row flex-col items-center justify-center lg:justify-between">
        <div className="max-w-[600px] max-h-[326px]">
          <p className="text-2xl lg:text-[56px] text-black-200 font-extrabold">All the cool features</p>
          <p className="text-base lg:text-xl text-black-200 mt-8">Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.</p>
          <div className="flex items-center space-x-2 my-8 cursor-pointer">
            <p className="text-[#2563EB] font-medium text-base lg:text-xl mr-1">View all the features</p>
            <Image
              src="./home/left.svg"
              alt="chevron-right"
              width={14}
              height={14}
            />
          </div>
        </div>
        <div className="relative">
          <Image
            className="h-[520px]"
            src="./images/home/blob.png"
            alt="blob"
            width={534}
            height={322}
          />
          <div className="absolute top-10 left-10 flex overflow-hidden xl:overflow-visible">
            <div
              className="max-w-[200px] h-full rounded-xl overflow-hidden shadow-[0px_0px_6px_0px_#0000001A] bg-white p-6 z-20"
            >
              <div className="rounded-lg py-1 px-2 inline-block bg-[#E0F2FE] text-[#0369A1]">
                <p>Product</p>
              </div>

              <h3 className="font-semibold text-xl text-gray-800 mt-2">Design for how people think</h3>

              <p className="text-sm text-gray-600 mt-2">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>

              <button className="hover-scale w-full border-2 border-blue-600 mt-4 px-4 py-2 text-blue-600 text-sm font-semibold rounded-lg transition">
                Take Lesson
              </button>

            </div>
            <div className="relative mt-10">
              <Image
                src="./images/home/star.png"
                alt="blob"
                width={256}
                height={554}
                className="w-[256px] h-[554px] mt-[-120px]"
              />
              <div>
                <Image
                  className="absolute top-[30px]"
                  src="./images/home/picture-2.png"
                  alt="blob"
                  width={534}
                  height={522}
                />
                <Image
                  className="absolute right-[-20px] top-[120px]"
                  src="./images/home/user.png"
                  alt="blob"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
          <div className="absolute lg:top-[330px] top-80 left-10 flex overflow-hidden xl:overflow-visible">
            <Image
              src="./images/home/picture-date.png"
              alt="blob"
              width={304}
              height={179}
            />
            <Image
              src="./images/home/picture-1.png"
              alt="blob"
              width={232}
              height={179}
            />
          </div>
        </div>
      </div>
    </div>
  );
}