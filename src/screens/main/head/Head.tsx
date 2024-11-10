import React from "react";
import cn from "classnames";
import styles from "./Head.module.scss";
import Button from "@/components/UI/button/Button";
import Link from "next/link";

const Head = () => {
   return (
      <div className="container">
         <div className={styles.wrapper}>
            <div className={styles.title}>
               <h1>Balancing</h1>
               <h1>Crypto Markets</h1>
            </div>
            <div className={cn(styles.text, "text")}>
               Our fully automated proprietary quantitative trading software
               provides 24/7 liquidity to 170+ crypto assets across 25+
               centralized spot and derivative crypto exchanges.
            </div>
            <Button>
               <Link href="/" className={styles.link}>
                  Get in touch
               </Link>
            </Button>
         </div>
      </div>
   );
};

export default Head;
