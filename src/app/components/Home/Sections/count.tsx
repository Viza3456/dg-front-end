import Image from "next/image";
import { stats } from "@/constants/home";

export default function Count() {

  return (
    <div className="bg-black-200">
      <div className="container-screen lg:h-[373px] lg:flex items-center justify-between px-20">
        {stats.map((stat, index) => (
          <div key={index} className="py-12 lg:py-0 text-center">
            <div className="flex justify-center">
              <Image
                className="w-12 h-12 rounded-full object-cover"
                src={stat.image}
                alt={stat.label}
                width={64}
                height={64}
              />
            </div>
            <p className="text-yellow-400 font-extralight text-7xl">{stat.number}</p>
            <p className="text-yellow-400 text-2xl">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}