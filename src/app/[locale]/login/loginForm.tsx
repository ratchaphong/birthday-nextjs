"use client";

import CustomButton from "@/components/button";
import FormInput from "@/components/input";
import useLoginForm from "./loginForm.hooks";
import styles from "./loginForm.module.scss";
import { LoginFormSectionProps } from "./loginForm.types";

export default function LoginForm() {
  const { control, handleSubmit, onChangeState, errors, state, t } =
    useLoginForm();

  return (
    <div className={styles.container}>
      <section id="introSection">
        <div>
          <h1>ลงประกาศงานเพื่อพบกับผู้สมัครที่ใช่วันนี้</h1>
          <p>
            เราส่งมอบตำแหน่งงานให้ถึงมือผู้สมัครที่เหมาะสมที่สุด
            และพร้อมช่วยพัฒนาแบรนด์ของคุณสู่ความเป็นบริษัทชั้นนำ
          </p>
        </div>
      </section>
      <section id="formSection">
        <form className={styles.form} onSubmit={handleSubmit}>
          <div id="formToggle">
            <button
              id="loginTab"
              data-state="login"
              type="button"
              className={state === "login" ? styles.active : ""}
              onClick={(e) =>
                onChangeState(
                  e.currentTarget.dataset.state as "login" | "signup"
                )
              }
            >
              เข้าสู่ระบบ
            </button>
            <button
              id="signupTab"
              data-state="signup"
              type="button"
              className={state === "signup" ? styles.active : ""}
              onClick={(e) =>
                onChangeState(
                  e.currentTarget.dataset.state as "login" | "signup"
                )
              }
            >
              ลงทะเบียน
            </button>
          </div>
          {state === "login" ? (
            <LoginFormSection control={control} errors={errors} />
          ) : (
            <SignupFormSection />
          )}
        </form>
      </section>
    </div>
  );
}

function LoginFormSection({ control, errors }: LoginFormSectionProps) {
  return (
    <div className={styles.loginForm}>
      <h1>เข้าสู่ระบบ</h1>
      <FormInput
        name="username"
        label="ชื่อผู้ใช้งาน"
        control={control}
        errors={errors}
        placeholder="ระบุชื่อผู้ใช้งาน"
      />
      <FormInput
        name="password"
        label="รหัสผ่าน"
        control={control}
        errors={errors}
        placeholder="ระบุรหัสผ่าน"
        password
      />
      <CustomButton htmlType="submit" className="secondary">
        เข้าสู่ระบบ
      </CustomButton>
    </div>
  );
}

function SignupFormSection() {
  return (
    <div className={styles.signupForm}>
      <h1>ลงทะเบียน</h1>
      <p>ยังไม่เปิดให้บริการ ณ ขณะนี้</p>
    </div>
  );
}

// Presentational Component
