"use client";

import styles from "./countdown.module.scss";
import { CountdownUIProps } from "./birthday.types";

export default function CountdownUI({ timeLeft }: CountdownUIProps) {
  return (
    <div className={styles.container}>
      <div className={styles.hotspot} />
      <div className={styles.overlay}>
        <h1>{timeLeft}</h1>
      </div>
    </div>
  );
}
