import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ height, width }: { height: number; width: number }) => {
  return (
    <Link href="/" passHref>
      <div className="flex items-center gap-3 text-white">
        <Image
          src="./logo.svg"
          width={width}
          height={height}
          alt="A1 lifts and enginnering logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
