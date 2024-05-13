import { useState, useEffect } from "react";
import "./Clock.module.css";
export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span>{now.toLocaleTimeString()}</span>;
}
