import React from "react";

const GradientIcon = ({
   children,
   id,
}: {
   children: React.ReactNode;
   id: string;
}) => {
   return (
      <>
         <svg width="0" height="0" gradientTransform="rotate(135)">
            <defs>
               <linearGradient id={id}>
                  <stop stopColor="#665dcd" offset="0%" />
                  <stop stopColor="#5fa4e6" offset="45%" />
                  <stop stopColor="#d2ab67" offset="100%" />
               </linearGradient>
            </defs>
         </svg>
         {children}
      </>
   );
};

export default GradientIcon;
