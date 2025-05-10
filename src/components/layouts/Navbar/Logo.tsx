import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ size }: { size: number }) => {
  return (
    <Link href="/" passHref>
      <div className="flex items-center gap-3">
        <Image
          src="./logo.svg"
          width={size}
          height={size}
          alt="A1 lifts and enginnering logo"
        />
        <div>
          <p className="text-xl md:text-2xl font-semibold text-white">
            A1 Lifts
          </p>
          <p className="text-xs">And Engineering</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
