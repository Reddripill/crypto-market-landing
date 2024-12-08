import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
   return (
      <div className="lg:w-[180px] sm:w-[140px] w-[120px]">
         <Link href="http://195.133.146.132/">
            <Image height={42} width={180} src="/logo.png" alt="Gravity Team" />
         </Link>
      </div>
   );
};

export default Logo;
