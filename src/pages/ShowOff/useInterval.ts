import React, { useRef, useEffect } from 'react';

export function useInterval(callback: () => void, delay: number | undefined) {
    const savedCallback = useRef(callback);
    console.log(savedCallback);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
