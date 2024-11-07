"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { titles } from "../menu.data";
import Logo from "@/components/UI/logo/Logo";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedNavs, setSelectedNavs] = useState<string[]>([]);
   const clickHandler = (nav: string) => {
      if (isOpen) {
         if (selectedNavs.includes(nav)) {
            const newSelectedNavs = selectedNavs.filter((item) => item !== nav);
            setSelectedNavs(newSelectedNavs);
         } else {
            setSelectedNavs([...selectedNavs, nav]);
         }
      }
   };
   return (
      <header className={styles.header}>
         <div className={styles.wrapper}>
            <div className={styles.container}>
               <Logo />
               <menu className={cn(styles.menu, { [styles["_open"]]: isOpen })}>
                  <nav className={styles.nav}>
                     {titles.map((item) =>
                        item.type === "link" ? (
                           <div
                              key={item.title}
                              className={styles["menu-item"]}
                           >
                              <Link
                                 href="/"
                                 className={cn(styles.text, "uppercased-title")}
                              >
                                 {item.title}
                              </Link>
                           </div>
                        ) : (
                           <div
                              key={item.title}
                              className={cn(styles["sub-menu-container"], {
                                 [styles["_open"]]: selectedNavs.includes(
                                    item.title
                                 ),
                              })}
                              onClick={() => clickHandler(item.title)}
                           >
                              <div className={styles["sub-menu-link"]}>
                                 <div
                                    className={cn(
                                       styles.text,
                                       "uppercased-title"
                                    )}
                                 >
                                    {item.title}
                                 </div>
                                 <div className={styles.arrow}>
                                    <ChevronDown
                                       className={styles["arrow-icon"]}
                                    />
                                 </div>
                              </div>
                              <div className={styles["sub-menu"]}>
                                 {item.subItems?.map((subItem) => (
                                    <div
                                       key={subItem}
                                       className={styles["sub-menu-item"]}
                                    >
                                       <Link
                                          href="/"
                                          className={styles["sub-menu-text"]}
                                       >
                                          {subItem}
                                       </Link>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        )
                     )}
                     <div
                        className={cn(
                           styles["menu-item"],
                           styles["contact-clone"]
                        )}
                     >
                        <Link href="/" className={styles.text}>
                           get in touch
                        </Link>
                     </div>
                  </nav>
               </menu>
               <div className={styles.contact}>
                  <div className={cn(styles.attr, "gradient")} />
                  <div className={cn(styles.text, "uppercased-title")}>
                     <Link href="/">get in touch</Link>
                  </div>
               </div>
               <div
                  className={cn(styles.burger, { [styles["_open"]]: isOpen })}
                  onClick={() => setIsOpen(!isOpen)}
               >
                  <span></span>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
