import Image from "next/image";
import { cardProduct } from "@/constants/home";

export default function Feature() {

  return (
    <div className="container-screen xl:flex justify-between mt-20 mb-32 lg:my-20 px-6">
      <div className="2xl:min-w-[544px] max-w-[544px] max-h-[326px]">
        <p className="text-2xl leading-[1.2] lg:text-[56px] text-black-200 font-extrabold">An all-in-one app that makes it easier</p>
        <ul className="mt-8">
          <li className="flex items-start text-base mr-4">
            <Image
              src="/home/check.svg"
              alt="chevron-right"
              width={24}
              height={24}
            />
            Est et in pharetra magna adipiscing ornare aliquam.</li>
          <li className="flex items-start text-base mr-4">
            <Image
              src="/home/check.svg"
              alt="chevron-right"
              width={24}
              height={24}
            />
            Est et in pharetra magna adipiscing ornare aliquam.</li>
          <li className="flex items-start text-base mr-4">
            <Image
              src="/home/check.svg"
              alt="chevron-right"
              width={24}
              height={24}
            />
            Est et in pharetra magna adipiscing ornare aliquam.</li>
        </ul>
        <div className="flex items-center space-x-2 my-8 cursor-pointer">
          <p className="text-[#2563EB] font-medium text-xl mr-1">Find more about the app</p>
          <Image
            src="/home/left.svg"
            alt="chevron-right"
            width={14}
            height={14}
          />
        </div>
      </div>
      <div className="relative flex justify-end mt-8 xl:mt-0">
        <div>
          <Image
            className="absolute left-0 right-0 lg:top-[20px] lg:left-[120px]"
            src="/images/home/blob.png"
            alt="Background Image"
            width={406}
            height={300}
          />
        </div>
        <div>
          <Image
            className="absolute top-0 right-0 lg:right-28 z-10"
            src="/images/home/desktop.png"
            alt="Overlay Image"
            width={600}
            height={391}
          />
        </div>
        <div className="space-x-6 w-full flex mt-48 lg:mt-72 lg:mr-0 scrollbar-hidden padding-left-responsive overflow-x-auto py-2">
          {cardProduct.map((card) => (
            <div
              key={card.id}
              className="min-w-[210px] max-w-[210px] h-full rounded-xl overflow-hidden shadow-[0px_0px_6px_0px_#0000001A] bg-white p-6 relative z-20"
            >
              {/* Dynamic Category Label */}
              <div className={`rounded-lg py-1 px-2 inline-block ${card.categoryColor}`}>
                <p>{card.category}</p>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl text-gray-800 mt-2">{card.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>

              {/* Button */}
              <button className="hover-scale w-full border-2 border-blue-600 mt-4 px-4 py-2 text-blue-600 text-sm font-semibold rounded-lg transition">
                Take Lesson
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}