/* This hook takes a ref to a nodes container and an options object. It sets up an
intersection observer for each child element according to the options object settings.
It returns the Id of the first child node currently intersecting, and empty string if no
current intersection exists */

import { useEffect, useState } from "react";

export default function useObserveForId(containerRef, options, mobile) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (mobile) return;
    console.count("Observer Id Hook: ");
    const observer = new IntersectionObserver((entries) => {
      console.log("Page Intersection");
      let noIntersection = true;
      entries.forEach((entry) => {
        if (noIntersection && entry.isIntersecting) {
          noIntersection = false;
          setActiveId(entry.target.id);
        }
      });
      if (noIntersection) setActiveId("");
    }, options);

    containerRef.current.childNodes.forEach((node) => {
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [containerRef, options, mobile]);

  return activeId;
}
