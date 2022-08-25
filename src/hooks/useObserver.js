import { useEffect, useRef } from 'react'


export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();
    useEffect((...args) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect()
        const cb = (entries, observer) => {
            if (entries[0].isIntersecting && canLoad) {
                callback(...args)
            }
        }
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading])
}