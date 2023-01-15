import { useRef, useState, useEffect, useCallback } from "react";

const useCarousel = (duration = 0.2, delay = 0) => {
  const element = useRef();

  const [maxCount, setMaxCount] = useState(0);
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    if (current === 0) return;
    else setCurrent(current - 1);
  }, [current, setCurrent]);

  const next = useCallback(() => {
    if (current + 1 >= maxCount) return;
    else setCurrent(current + 1);
  }, [current, setCurrent, maxCount]);

  const reset = useCallback(() => {
    setCurrent(0);
  }, [setCurrent]);

  useEffect(() => {
    element.current.style.transitionProperty = "all";
    element.current.style.transitionDuration = `${duration}s`;
    element.current.style.transitionTimingFunction = "ease-in-out";
    element.current.style.transitionDelay = `${delay}s`;
    element.current.style.transform = `translateX(-${
      maxCount === 0 ? 0 : 100 * (current / maxCount)
    }%)`;
  }, [delay, duration, current, maxCount]);

  useEffect(() => {
    let innerElements = element.current.innerHTML;
    let count = (innerElements.match(/<img/g) || []).length;
    setMaxCount(count);
  }, []);

  return {
    ref: element,
    prev: prev,
    next: next,
    reset: reset,
    setCurrent: setCurrent,
    current: current,
  };
};

export default useCarousel;
