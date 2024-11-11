"use client";
import React, { useEffect, useState } from "react";

export const useIntersectionObs = (ref: React.RefObject<HTMLElement>) => {
   const [isIntersecting, setisIntersecting] = useState(true);
   useEffect(() => {
      const target = ref.current;
      const configObserver: IntersectionObserverInit = {
         root: null,
         rootMargin: "",
      };
      const observer = new IntersectionObserver((entries) => {
         setisIntersecting(entries[0].isIntersecting);
      }, configObserver);
      if (target) observer.observe(target);
      return () => {
         if (target) observer.unobserve(target);
      };
   }, [ref]);
   return isIntersecting;
};
