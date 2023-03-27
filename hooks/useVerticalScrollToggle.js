/* This hook sets up a toggle variable and a scroll event listener.
The toggle is flipped based on the vertical scroll distance of the window.
It returns false when the window is not scrolled, and true when the page is scrolled
by any amount.
*/

import useToggle from "./useToggle";
import { useCallback, useRef, useLayoutEffect } from "react";

export default function useVerticalScrollToggle() {
  const [value, toggleValue] = useToggle(false);
  const scrollTopRef = useRef(0);

  const handleScroll = useCallback(() => {
    scrollTopRef.current = (
      document.documentElement ||
      document.body.parentNode ||
      document.body
    ).scrollTop;

    if (scrollTopRef.current > 0 && !value) {
      toggleValue(true);
    } else if (scrollTopRef.current === 0 && value) {
      toggleValue(false);
    }
  }, [toggleValue, value, scrollTopRef]);

  useLayoutEffect(() => {
    // console.count("Vert Scroll LOE");
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return value;
}
