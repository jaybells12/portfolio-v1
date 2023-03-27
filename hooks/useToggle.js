import { useState, useCallback } from "react";

export default function useToggle(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  // function toggleValue(value) {
  //   setValue((currentValue) =>
  //     typeof value === "boolean" ? value : !currentValue
  //   );
  // }

  const toggleValue = useCallback((value) => {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }, []);

  return [value, toggleValue];
}
