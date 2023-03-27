import useToggle from "./useToggle";
import useTimeout from "./useTimeout";
import { useEffect } from "react";

export default function useDebouncedResizeToggle(delay) {
  const [value, toggleValue] = useToggle();

  const { reset, clear } = useTimeout(toggleValue, delay);

  useEffect(() => {
    clear();
  }, [clear]);

  useEffect(() => {
    window.addEventListener("resize", reset);

    return () => window.removeEventListener("resize", reset);
  }, [reset]);

  return value;
}
