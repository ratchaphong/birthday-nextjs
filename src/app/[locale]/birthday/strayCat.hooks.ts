"use client";
import { useRef, useState, useEffect, useMemo } from "react";

export default function useStrayCat() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [foundSecret, setFoundSecret] = useState<"hint3" | "hint4" | null>(
    null
  );
  const [currentHint, setCurrentHint] = useState<"hint3" | "hint4" | null>(
    null
  );
  const [showAltImage, setShowAltImage] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [leaveCount, setLeaveCount] = useState(0);

  const onClickCount = () => {
    setClickCount((prev) => prev + 1);
  };

  const onLeaveCount = () => {
    setLeaveCount((prev) => prev + 1);
  };

  const hint1Text = useMemo(() => {
    return clickCount >= 3
      ? "I see something in the bottom right corner of the picture."
      : "Can you pet me please, Mama. 🥺";
  }, [clickCount]);

  const hint2Text = useMemo(() => {
    return leaveCount >= 10
      ? "There's something behind the curtain."
      : "I have nothing to tell u, Give me a food. 😡";
  }, [leaveCount]);

  // ✅ เสียงเล่นจบ = พบ secret
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      if (currentHint) {
        console.log(`เสียงเล่นจบจาก ${currentHint}! 🎉`);
        setFoundSecret(currentHint); // ⬅️ เก็บว่าเจอจาก hint ไหน
      }
    };

    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentHint]);

  // ✅ ควบคุมเสียง
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isShaking) {
      audio.loop = false;
      audio.play().catch((err) => {
        console.error("Audio play error:", err);
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isShaking]);

  // ✅ Hover บนภาพ (กลางจอ) เพื่อตั้งเวลา 3 วิ เปลี่ยนภาพ
  const handleTreasureHoverStart = () => {
    if (hoverTimerRef.current) return;

    hoverTimerRef.current = setTimeout(() => {
      setShowAltImage((prev) => !prev); // 🔁 toggle ไป-มา
      hoverTimerRef.current = null;
    }, 3000); // 3 วินาที
  };

  const handleTreasureHoverEnd = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  // ✅ สำหรับ hint3 / hint4 แบบเดิม
  const handleHoverStart = (hint: "hint3" | "hint4") => {
    setCurrentHint(hint);

    // ตรวจว่า user ได้มี interaction หรือยัง
    const audio = audioRef.current;
    if (audio && audio.paused) {
      audio.play().catch((err) => {
        console.warn("Audio play failed due to autoplay policy:", err);
      });
    }

    setIsShaking(true);
  };

  const handleHoverEnd = () => {
    setIsShaking(false);
    setCurrentHint(null);
  };

  return {
    audioRef,
    isShaking,
    foundSecret,
    showAltImage,
    hint1Text,
    hint2Text,
    clickCount,
    leaveCount,
    handleHoverStart,
    handleHoverEnd,
    handleTreasureHoverStart,
    handleTreasureHoverEnd,
    onClickCount,
    onLeaveCount,
  };
}
