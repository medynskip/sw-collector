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
        console.log('value', value);
        

        window.localStorage.setItem(key, JSON.stringify(value));
        // try {
        //     window.localStorage.setItem(key, JSON.stringify(value));
        // } catch {
        //     console.error(`Error setting localStorage`);
        // }
    }, [value, key]);
  
    return [value, setValue] as const;
  };