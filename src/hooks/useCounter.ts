import { useEffect, useRef, useState } from "react";

export function useCounter(target: number, start = false) {
  const [value, setValue] = useState(0);
  const played = useRef(false);

  useEffect(() => {
    if (!start || played.current) return;
    played.current = true;
    const duration = 1400;
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start]);

  return value;
}
