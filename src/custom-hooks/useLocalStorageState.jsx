import { useEffect, useState } from "react";

export function useLocaleStorageState(key, inialVal) {
  const [state, setState] = useState(() => {
    const data = JSON.parse(localStorage.getItem(key));
    return data ? data : inialVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
