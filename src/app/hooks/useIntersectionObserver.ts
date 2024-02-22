import { useEffect, useRef } from "react";

export const useIntersectionObserver = (
    callback: Function
) => {
    const observerRef = useRef<HTMLDivElement | null>(null);
    const setRef = (elem:HTMLDivElement) => {
        observerRef.current = elem;
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                callback();
            }
        });
    
        if (observerRef.current) {
            observer.observe(observerRef.current);
        };
        
        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            };
        }
    }, [observerRef, callback]);

    return [setRef] as const;
}
