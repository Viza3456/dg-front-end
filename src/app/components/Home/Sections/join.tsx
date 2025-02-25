import Image from "next/image";

export default function Join() {

  return (
    <div className="h-[779px] w-full bg-yellow-400 flex flex-col md:flex-row justify-between py-4 md:py-20 relative">
      {/* Mobile top image */}
      <div className="block md:hidden px-4">
        <Image
          src="/images/home/mobile-top.png"
          alt="mobile-top"
          width={467}
          height={167}
          className="object-contain w-full h-[167px] max-h-[636px]"
        />
      </div>

      {/* Center Text */}
      <div className="md:absolute md:top-1/2 md:left-1/2 z-20 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full text-center">
        <p className="text-black-200 font-extrabold text-xl md:text-[56px]">Join a world of learning</p>
        <p className="text-black-200 text-base lg:text-xl mt-8">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.<br />
          Risus elit et fringilla habitant ut facilisi.
        </p>
        <div className="flex justify-center mt-8">
          <button className="hover:bg-red-600 transition-colors duration-300 w-[180px] lg:w-[239px] h-[56px] lg:h-[64px] text-xl lg:text-2xl font-bold rounded-lg bg-red-300 text-white">
            Sign Up Now
          </button>
        </div>
      </div>

      {/* Mobile bottom image */}
      <div className="block md:hidden px-4">
        <Image
          src="/images/home/mobile-bottom.png"
          alt="mobile-bottom"
          width={470}
          height={195}
          className="object-contain w-full h-[195px] max-h-[598px]"
        />
      </div>

      {/* Large Screens: Left Image */}
      <div className="hidden md:block">
        <Image
          src="/images/home/alot-left.png"
          alt="alot-left"
          width={467}
          height={636}
          className="object-contain w-full h-full max-h-[636px]"
        />
      </div>

      {/* Large Screens: Right Image */}
      <div className="hidden md:block">
        <Image
          src="/images/home/alot-right.png"
          alt="alot-right"
          width={470}
          height={598}
          className="object-contain w-full h-full max-h-[598px]"
        />
      </div>

    </div>
  );
}