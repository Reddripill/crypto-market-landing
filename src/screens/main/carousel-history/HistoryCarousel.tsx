"use client";
import React from "react";
import { Carousel, useCarousel } from "nuka-carousel";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import cn from "classnames";
import styles from "./HistoryCarousel.module.scss";

const CarouselArrows = () => {
   const { goBack, goForward } = useCarousel();
   return (
      <div className={styles["carousel-arrows"]}>
         <div
            className={styles["carousel-arrow"]}
            onClick={() => {
               console.log("click");
               goBack();
            }}
         >
            <ArrowLeft />
         </div>
         <div className={styles["carousel-arrow"]} onClick={goForward}>
            <ArrowRight />
         </div>
      </div>
   );
};
const CustomDots = () => {
   const { totalPages, currentPage, goToPage } = useCarousel();

   return (
      <div className={styles["carousel-dots"]}>
         {[...Array(totalPages)].map((_, index) => (
            <button
               key={index}
               onClick={() => goToPage(index)}
               className={cn(styles["carousel-dot"], {
                  gradient: currentPage === index,
               })}
            />
         ))}
      </div>
   );
};

const HistoryCarousel = () => {
   return (
      <div className={styles.wrapper}>
         <div className="container">
            <div className={styles.content}>
               <h2 className={styles.title}>We are in a good company</h2>
               <div className={cn(styles.text, "text")}>
                  Our partnerships have delivered great value to our projects
                  and we’re happy to share some of their feedback below
               </div>
            </div>
            <div className={styles.carousel}>
               <div className={styles["carousel-body"]}>
                  <Carousel
                     showArrows={true}
                     arrows={<CarouselArrows />}
                     showDots={true}
                     dots={<CustomDots />}
                     wrapMode="wrap"
                  >
                     <div className={styles["carousel-item"]}>
                        <div className={styles["carousel-container"]}>
                           <div className={styles["carousel-text"]}>
                              Since 2019, Gravity team has been an astounding
                              market maker for Bitkub. They have proven
                              themselves to be one of the most consistent,
                              committed and driven market makers on our
                              exchange. Gravity Team has contributed
                              high-quality volume and has proven to be very
                              reliable and trustworthy partner. We strongly
                              advocate Gravity Team as they have been an
                              indispensable part of our market-making team.
                           </div>
                           <div className={styles["carousel-footer"]}>
                              <div className={styles["carousel-name"]}>
                                 Atthakrit Chimplapibul
                              </div>
                              <div className={styles["carousel-labels"]}>
                                 <div className={styles["carousel-post"]}>
                                    Co-founder & CEO of Bitkub
                                 </div>
                                 <div className={styles["carousel-logo"]}>
                                    <Image
                                       src="/other-logo.png"
                                       alt="Company Logo"
                                       width={125}
                                       height={26}
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={styles["carousel-item"]}>
                        <div className={styles["carousel-container"]}>
                           <div className={styles["carousel-text"]}>
                              Since 2019, Gravity team has been an astounding
                              market maker for Bitkub. They have proven
                              themselves to be one of the most consistent,
                              committed and driven market makers on our
                              exchange. Gravity Team has contributed
                              high-quality volume and has proven to be very
                              reliable and trustworthy partner. We strongly
                              advocate Gravity Team as they have been an
                              indispensable part of our market-making team.
                           </div>
                           <div className={styles["carousel-footer"]}>
                              <div className={styles["carousel-name"]}>
                                 Atthakrit Chimplapibul
                              </div>
                              <div className={styles["carousel-labels"]}>
                                 <div className={styles["carousel-post"]}>
                                    Co-founder & CEO of Bitkub
                                 </div>
                                 <div className={styles["carousel-logo"]}>
                                    <Image
                                       src="/other-logo.png"
                                       alt="Company Logo"
                                       width={125}
                                       height={26}
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Carousel>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HistoryCarousel;
