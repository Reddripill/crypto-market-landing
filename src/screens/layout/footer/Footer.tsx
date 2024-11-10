import React from "react";
import cn from "classnames";
import styles from "./Footer.module.scss";
import { titles } from "../menu.data";
import Link from "next/link";
import Logo from "@/components/UI/logo/Logo";

const Footer = () => {
   const footerNavs = titles.filter((item) => !!item.isFooter);
   return (
      <footer className={styles.footer}>
         <div className={styles.wrapper}>
            <div className="container">
               <div className={styles.content}>
                  <div className={styles.information}>
                     <div
                        className={cn(
                           styles["information-title"],
                           "uppercased-title"
                        )}
                     >
                        Gravity Team
                     </div>
                     <nav className={styles["information-list"]}>
                        {footerNavs.map((item) => (
                           <div
                              key={item.title}
                              className={cn(
                                 styles["information-item"],
                                 styles["footer-text"]
                              )}
                           >
                              <Link href="/">{item.title}</Link>
                           </div>
                        ))}
                     </nav>
                  </div>
                  <Logo />
               </div>
               <div className={styles.terms}>
                  <div
                     className={cn(styles["footer-text"], styles["terms-item"])}
                  >
                     <div>Terms of Use & Privacy Policy</div>
                  </div>
                  <div
                     className={cn(styles["footer-text"], styles["terms-item"])}
                  >
                     ©2022 Gravity Team. All Rights Reserved
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
