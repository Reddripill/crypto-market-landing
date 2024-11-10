"use client";
import React from "react";
import styles from "./Partners.module.scss";
import Image from "next/image";
import { useMatchMedia } from "@/hooks/useMatchMedia";

const Partners = () => {
   const isDesktop = useMatchMedia("(min-width: 1024px)");
   return (
      <div className={styles.partners}>
         {isDesktop && (
            <div className={styles["partners-decoration"]}>
               <Image
                  src="/image-4.png"
                  alt="Decoration"
                  width={200}
                  height={200}
               />
            </div>
         )}
         <div className="container">
            <div className={styles["partners-content"]}>
               <h2 className={styles["partners-title"]}>
                  Our Partners & Friends
               </h2>
               <div className={styles["partners-image"]}>
                  <Image
                     src="/image-3.png"
                     alt="Figures"
                     width={400}
                     height={700}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Partners;
