import { useCallback, useRef } from "react";

function useThrottle(cb, delay) {
  const lastExecutedRef = useRef(0);
  const timeoutRef = useRef(null);

  const throttledFunction = useCallback(
    (...args) => {
      const now = Date.now();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (now - lastExecutedRef.current >= delay) {
        cb(...args);
        lastExecutedRef.current = now;
      } else {
        const remainingTime = delay - (now - lastExecutedRef.current);
        timeoutRef.current = setTimeout(() => {
          cb(...args);
          lastExecutedRef.current = Date.now();
          timeoutRef.current = null;
        }, remainingTime);
      }
    },
    [cb, delay]
  );

  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  return [throttledFunction, cleanup];
}

export default useThrottle;
