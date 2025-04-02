import classNames from "classnames";
import styles from "./strayCat.module.scss";
import { StrayCatUIProps } from "./birthday.types";
import useStrayCat from "./strayCat.hooks";

export default function StrayCatUI({}: StrayCatUIProps) {
  const {
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
  } = useStrayCat();

  switch (foundSecret) {
    case "hint3":
      return (
        <div className={classNames(styles.container, styles.sunrise)}>
          <div className={classNames(styles["ct-wrapper"], styles.sunrise)}>
            <img src="/honey.png" alt="my girlfriend" />
          </div>
          <div className={classNames(styles.textbox, styles.sunrise)}>
            <h1>
              You make every ordinary day feel magical. I'm so lucky to have
              you. 💛
            </h1>
          </div>
        </div>
      );
    case "hint4": {
      return (
        <div className={classNames(styles.container, styles.sunset)}>
          <div
            className={classNames(styles["treasure-wrapper"], {
              [styles.flipped]: showAltImage,
            })}
            onMouseEnter={handleTreasureHoverStart}
            onMouseLeave={handleTreasureHoverEnd}
          >
            <div className={styles["flip-inner"]}>
              <img
                className={styles.front}
                src="/honey_8bit.png"
                alt="my girlfriend"
              />
              <img
                className={styles.back}
                src="/honey_kid_without_text.PNG"
                alt="my girlfriend"
              />
            </div>
          </div>
          <div className={classNames(styles.textbox, styles.sunset)}>
            {showAltImage ? (
              <h1>Happy Birthday, my sunshine. 🌻</h1>
            ) : (
              <h1>
                Thank you for being you — and for making my world better every
                single day.🐱💖
              </h1>
            )}
          </div>
        </div>
      );
    }
    default: {
      return (
        <div className={styles.container}>
          <div className={styles["image-wrapper"]}>
            <audio ref={audioRef} src="/sfx/shake-sound.mp3" preload="auto" />
            {leaveCount >= 10 && (
              <div
                className={classNames(styles.hotspot, styles.hint3)}
                onMouseEnter={() => handleHoverStart("hint3")}
                onMouseLeave={handleHoverEnd}
              />
            )}
            {clickCount >= 3 && (
              <div
                className={classNames(styles.hotspot, styles.hint4)}
                onMouseEnter={() => handleHoverStart("hint4")}
                onMouseLeave={handleHoverEnd}
              />
            )}
            <img src="/tone_mon.png" alt="cute pixel cat" />
            <div
              className={classNames(styles.hotspot, styles.hint1)}
              onClick={onClickCount}
            >
              <p>{hint1Text}</p>
            </div>
            <div
              className={classNames(styles.hotspot, styles.hint2)}
              onMouseLeave={onLeaveCount}
            >
              <p>{hint2Text}</p>
            </div>
          </div>
          <div className={styles.textbox}>
            <h1>We've got something for u, Mama 🐟</h1>
          </div>
        </div>
      );
    }
  }
}
