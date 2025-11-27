import { useEffect } from "react";
import { useState } from "react";

export const TimeStamp = ({finalValue})=>{
  const start = 0;
  const duration = 5000;
  const [value, setValue] = useState(start);

  useEffect(() => {
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(start + (finalValue - start) * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (<><p className="stat-value">{value.toLocaleString("en-IN")}</p></>)

}