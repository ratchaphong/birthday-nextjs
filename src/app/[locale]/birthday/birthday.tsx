"use client";

import CountdownUI from "./countdown";
import useBirthdayUI from "./birthday.hooks";
import StrayCatUI from "./strayCat";

export default function BirthdayUI() {
  const { status, timeLeft } = useBirthdayUI();
  // 🔁 Return แยกตาม status
  if (status === "on") {
    return <StrayCatUI />;
  }

  return <CountdownUI timeLeft={timeLeft} />;
}
