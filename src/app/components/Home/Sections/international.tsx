import Image from "next/image";

export default function International() {

  return (
    <div className="container-screen flex flex-col-reverse lg:flex-row items-center lg:space-x-8 my-20">
      <div>
        <Image
          className="rounded-full object-cover w-full max-w-[600px]"
          src="./images/home/study.png"
          alt="study"
          width={600}
          height={651}
        />
      </div>

      <div className="relative max-w-[600px] w-full">
        <Image
          className="absolute right-[50%] translate-x-[50%] lg:right-[230px] lg:translate-x-0 top-[-25px]"
          src="./home/plane-departure.svg"
          alt="plane"
          width={64}
          height={64}
        />

        <p className="text-2xl lg:text-[56px] leading-[1.2] text-black-200 font-extrabold">
          Meet international students & teachers
        </p>

        <p className="text-base lg:text-xl text-black-200 mt-8">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
        </p>

        <div className="flex lg:justify-start items-center my-8 cursor-pointer">
          <p className="text-[#2563EB] font-medium text-xl mr-1">Explore teachers and students</p>
          <Image src="./home/left.svg" alt="chevron-right" width={14} height={14} />
        </div>
      </div>
    </div>
  );
}