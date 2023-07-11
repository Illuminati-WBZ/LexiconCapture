import Image from "next/image";
import React from "react";

const Username = () => {
  return (
    <div className="flex justify-start space-x-3 items-center sm:w-[70%] w-[90%] mx-auto mt-[50px] cursor-pointer">
      <span className="text-3xl">
        <Image
          src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
          width={35}
          height={35}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP89Vq9BQAHhQKSiDsHgAAAAABJRU5ErkJggg=="
        />
      </span>
      <h1 className="text-3xl md:text-4xl mb-3 font-caveat bg-clip-text mt-5 text-transparent bg-gradient-to-r from-orange-500 to-red-400 font-bold ">
        Pruthvi
      </h1>
    </div>
  );
};

export default Username;
