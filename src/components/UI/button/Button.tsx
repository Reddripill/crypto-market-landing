import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

const Button = ({ children }: { children: React.ReactNode }) => {
   return (
      <button type="button" className={cn(styles.button, "gradient")}>
         {children}
      </button>
   );
};

export default Button;
