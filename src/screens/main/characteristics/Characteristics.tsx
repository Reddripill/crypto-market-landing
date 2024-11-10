import React from "react";
import cn from "classnames";
import styles from "./Characteristics.module.scss";

const Characteristics = () => {
   return (
      <div className="section">
         <div className="container">
            <div className={styles.content}>
               <h2 className={styles.title}>About Gravity Team</h2>
               <div className="text">
                  At Gravity Team, we are on the mission to balance the supply
                  and demand across crypto markets worldwide. We are a crypto
                  native market maker founded by traders, developers, and
                  innovators who are strong believers and supporters of the
                  future of decentralization and digital assets.
               </div>
            </div>
            <div className={styles.grid}>
               <div className={styles["grid-item"]}>
                  <h3 className={styles["grid-title"]}>~$100 billion</h3>
                  <div className="text">cumulative trading volume to date</div>
               </div>
               <div
                  className={cn(
                     styles["grid-item"],
                     styles["grid-item-selected"]
                  )}
               >
                  <h3 className={styles["grid-title"]}>0.8%</h3>
                  <div className="text">
                     of the global crypto spot trading volume
                  </div>
               </div>
               <div className={styles["grid-item"]}>
                  <h3 className={styles["grid-title"]}>~30</h3>
                  <div className="text">Gravity Teammates (& growing)</div>
               </div>
               <div className={styles["grid-item"]}>
                  <h3 className={styles["grid-title"]}>25+</h3>
                  <div className="text">
                     leading global and local crypto exchanges
                  </div>
               </div>
               <div className={styles["grid-item"]}>
                  <h3 className={styles["grid-title"]}>~$100 billion</h3>
                  <div className="text">cumulative trading volume to date</div>
               </div>
               <div className={styles["grid-item"]}>
                  <h3 className={styles["grid-title"]}>0.8%</h3>
                  <div className="text">
                     of the global crypto spot trading volume
                  </div>
               </div>
               <div className={styles["grid-item"]}>
                  <h3 className={styles["grid-title"]}>~30</h3>
                  <div className="text">Gravity Teammates (& growing)</div>
               </div>
               <div className={styles["grid-item"]}>
                  <h3 className={styles["grid-title"]}>25+</h3>
                  <div className="text">
                     leading global and local crypto exchanges
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Characteristics;
