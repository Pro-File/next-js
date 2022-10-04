import Image from "next/image";
import React from "react";

const Cars = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((item) => {
        return (
          <Image
            key={item}
            width={"480"}
            height={"280"}
            alt="car"
            src={`/${item}.jpg`}
            placeholder="blur"
            blurDataURL={`/${item}.jpg`}
          />
        );
      })}
    </div>
  );
};

export default Cars;
