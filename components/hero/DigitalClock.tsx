"use client";
import { Clock } from "lucide-react";
import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="text-sm flex gap-2 items-center font-space-mono">
      <Clock size={20} className="text-gray-500" />
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default DigitalClock;
