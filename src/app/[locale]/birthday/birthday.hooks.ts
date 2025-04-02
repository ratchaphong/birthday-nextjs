"use client";

import { useState, useEffect } from "react";
import { CountdownStatus } from "./birthday.utils";

export default function useBirthdayUI() {
  const [timeLeft, setTimeLeft] = useState("");
  const [status, setStatus] = useState<CountdownStatus>("before");
  const [targetDate, setTargetDate] = useState<Date>(() => {
    const now = new Date();
    let date = new Date(now.getFullYear(), 4, 7, 0, 0, 0); // 7 พ.ค.

    if (now > date) {
      // ถ้าเลยแล้วให้ใช้ของปีถัดไป
      date = new Date(now.getFullYear() + 1, 4, 7, 0, 0, 0);
      setStatus("after");
    }

    return date;
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0 && now.toDateString() === targetDate.toDateString()) {
        setStatus("on");
        setTimeLeft("ถึงเวลาแล้ว!");
        return;
      }

      const seconds = Math.floor(diff / 1000);
      const days = Math.floor(seconds / (60 * 60 * 24));
      const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((seconds % (60 * 60)) / 60);
      const secs = seconds % 60;

      setTimeLeft(
        `เหลืออีก ${days} วัน ${hours} ชั่วโมง ${minutes} นาที ${secs} วินาที`
      );

      // ปรับสถานะเฉพาะเมื่อยังไม่เคยกำหนด
      if (status !== "after") {
        setStatus("before");
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [targetDate, status]);

  return {
    status,
    timeLeft,
  };
}
