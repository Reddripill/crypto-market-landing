import React from "react";
import cn from "classnames";
import styles from "./Content.module.scss";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import GradientIcon from "@/components/UI/GradientIcon";
import Partners from "../partners/Partners";
import HistoryCarousel from "../carousel-history/HistoryCarousel";
import Button from "@/components/UI/button/Button";

const Content = () => {
   return (
      <div className={styles.wrapper}>
         <div className="section">
            <div className={styles["section-wrapper"]}>
               <div className="container">
                  <div className={styles.content}>
                     <h2 className={styles.title}>Crypto Market Making</h2>
                     <div className="text">
                        We are a global crypto liquidity provider and
                        algorithmic market maker. We trade digital assets listed
                        on Centralized Exchanges in over 15 countries worldwide.
                     </div>
                  </div>
                  <div className={styles["flex-block"]}>
                     <div className={styles["purpose-description"]}>
                        <h3 className={styles["purpose-description-title"]}>
                           Market Making for Crypto Projects
                        </h3>
                        <h4 className={styles["purpose-description-subtitle"]}>
                           Accelerate your token’s journey by boosting its
                           liquidity
                        </h4>
                        <div
                           className={cn(
                              styles["purpose-description-text"],
                              "text"
                           )}
                        >
                           We invest in building long-term, sustainable
                           relationships and support our projects in their
                           growth journey with our services, industry expertise
                           and network.
                        </div>
                        <div className={styles["purpose-description-link"]}>
                           <div
                              className={
                                 styles["purpose-description-link-text"]
                              }
                           >
                              <Link href="/">Learn more</Link>
                           </div>
                           <div className={styles["purpose-description-arrow"]}>
                              <GradientIcon id="gradient-icon">
                                 <ArrowRight
                                    size={22}
                                    stroke="url(#gradient-icon)"
                                    strokeWidth={2}
                                    absoluteStrokeWidth={true}
                                 />
                              </GradientIcon>
                           </div>
                        </div>
                     </div>
                     <div className={styles["purpose-image"]}>
                        <Image
                           src="/image-1.png"
                           alt="Figures"
                           width={360}
                           height={360}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles["section-wrapper"]}>
               <div className="container">
                  <div className={styles["flex-block"]}>
                     <div
                        className={cn(
                           styles["purpose-description"],
                           styles["exchanges-description"]
                        )}
                     >
                        <h3 className={styles["purpose-description-title"]}>
                           Market Making for Crypto Exchanges
                        </h3>
                        <h4 className={styles["purpose-description-subtitle"]}>
                           Attract more traders and projects with deep order
                           books & liquidity
                        </h4>
                        <div
                           className={cn(
                              styles["purpose-description-text"],
                              "text"
                           )}
                        >
                           Our world-class market making services are proven to
                           help local and emerging exchanges win traders and
                           gain market-leading positions of up to 90% market
                           dominance.
                        </div>
                        <div className={styles["purpose-description-link"]}>
                           <div
                              className={
                                 styles["purpose-description-link-text"]
                              }
                           >
                              <Link href="/">Learn more</Link>
                           </div>
                           <div className={styles["purpose-description-arrow"]}>
                              <GradientIcon id="gradient-icon">
                                 <ArrowRight
                                    size={22}
                                    style={{ stroke: "url(#gradient-icon)" }}
                                    gradientUnits="userSpaceOnUse"
                                 />
                              </GradientIcon>
                           </div>
                        </div>
                     </div>
                     <div
                        className={cn(
                           styles["purpose-image"],
                           styles["exchanges-image"]
                        )}
                     >
                        <Image
                           src="/image-2.png"
                           alt="Figures"
                           width={510}
                           height={510}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Partners />
         <HistoryCarousel />
         <div className={styles["section-wrapper"]}>
            <div className="container">
               <div className={styles["flex-block"]}>
                  <h3 className={styles["join-title"]}>
                     Join <span>Gravity Team</span>
                  </h3>
                  <div className={styles["join-description"]}>
                     <div className={styles["join-text-content"]}>
                        <div
                           className={cn(
                              styles["join-description-text"],
                              "text"
                           )}
                        >
                           We invest in building long-term, sustainable
                           relationships and support our projects in their
                           growth journey with our services, industry expertise
                           and network.
                        </div>
                        <div
                           className={cn(
                              styles["join-description-text"],
                              "text"
                           )}
                        >
                           We invest in building long-term, sustainable
                           relationships and support our projects in their
                           growth journey with our services, industry expertise
                           and network.
                        </div>
                     </div>
                     <div className={styles["purpose-description-link"]}>
                        <div
                           className={styles["purpose-description-link-text"]}
                        >
                           <Link href="/">
                              Learn more about working with us
                           </Link>
                        </div>
                        <div className={styles["purpose-description-arrow"]}>
                           <GradientIcon id="gradient-icon">
                              <ArrowRight
                                 size={22}
                                 style={{ stroke: "url(#gradient-icon)" }}
                                 gradientUnits="userSpaceOnUse"
                              />
                           </GradientIcon>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles.contact}>
            <div className={styles["section-wrapper"]}>
               <div className="container">
                  <div className={styles["contact-content"]}>
                     <h2 className={styles.title}>Contact Us</h2>
                     <div className="text">
                        We are always open to discuss new value-adding
                        partnerships. Do reach out if you are an exchange or a
                        project looking for liquidity; an algorithmic trader or
                        a software developer looking to improve the markets with
                        us or just have a great idea you can’t wait to share
                        with us!
                     </div>
                  </div>
                  <Button>
                     <Link href="/" className={styles["content-link"]}>
                        Get in touch
                     </Link>
                  </Button>
               </div>
            </div>
         </div>

         {/* <div className={styles.shadow}>
            <Image
               src="/shadow-1.png"
               alt="First Shadow"
               width={1000}
               height={1200}
            />
         </div> */}
      </div>
   );
};

export default Content;
