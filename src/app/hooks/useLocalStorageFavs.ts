import { useEffect, useState } from "react";

export const useLocalStorageFavs = (
    key: string,
) => {
    const [value, setValue] = useState<string[]>(() => {
        if (typeof window === "undefined") {
            return;
        }

        const currentValue= window.localStorage.getItem(key);

        if (currentValue) {
            return JSON.parse(currentValue);
        }
        
        window.localStorage.setItem(key, JSON.stringify([]));

        return [];
        
    });
  
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue] as const;
  };