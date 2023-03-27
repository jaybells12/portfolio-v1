/* This hook takes a threshold number as a parameter, sets up a boolean toggle variable,
and registers a resize event listener.

The toggle is flipped when the current window width passes the threshold from either direction.

It returns true when the window width is less than the given threshold, and false when the window 
width is equal to or greater than the given threshold.
*/

import { useCallback, useLayoutEffect } from "react";
import useToggle from "./useToggle";

export default function useWindowWidthToggle(threshold) {
  const [value, toggleValue] = useToggle(
    window.innerWidth < threshold ? true : false
  );

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width < threshold && !value) {
      toggleValue(true);
    } else if (width >= 600 && value) {
      toggleValue(false);
    }
  }, [threshold, value, toggleValue]);

  useLayoutEffect(() => {
    // console.count("Window Width Hook LOE");
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return value;
}
