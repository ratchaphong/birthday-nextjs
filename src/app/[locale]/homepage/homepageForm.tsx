"use client";

import Image from "next/image";

import useHomepageForm from "./homepageForm.hooks";
import styles from "./homepageForm.module.scss";
import { ItemCardProps } from "./homepageForm.types";
import FormInput from "@/components/input";
import FormSelect from "@/components/select";
import CustomButton from "@/components/button";

export default function HomepageForm() {
  const { control, errors } = useHomepageForm();

  return (
    <div className={styles.container}>
      <section>
        <div>
          <div>
            <h1>ค้นหางานที่เหมาะกับ ไลฟ์สไตล์คุณ</h1>
            <p>
              เพื่อรักษาให้พื้นที่นี้เป็นสังคมสำหรับการแบ่งปันประสบการณ์ที่ดีที่สุด
              เราจึงให้ความสำคัญกับการรักษาความเป็นส่วนตัวของคุณ
              ให้คุณมั่นใจได้ว่าข้อมูลส่วนตัวของคุณจะไม่ถูกเปิดเผยตัวตน
            </p>
            <div>
              <div className={styles.w70}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <div className={styles.w30}>
                <FormSelect
                  name="gender"
                  control={control}
                  label="Gender"
                  placeholder="Please select"
                  errors={errors}
                  options={[
                    { label: "Male", value: "male" },
                    { label: "Female", value: "female" },
                  ]}
                />
              </div>
              <div className={styles.w70}>
                <FormInput
                  name="username"
                  label="Username"
                  control={control}
                  errors={errors}
                  placeholder="Enter your username"
                />
              </div>
              <div className={styles.w30}>
                <CustomButton htmlType="button" className="secondary">
                  ค้นหา
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1>ตำแหน่งงานใหม่ล่าสุด</h1>
          <ItemCard data={{}} />
          <ItemCard data={{}} />
          <ItemCard data={{}} />
        </div>
      </section>
    </div>
  );
}

function ItemCard({ data }: ItemCardProps) {
  return (
    <div className={styles.card}>
      <section>
        <div>
          <Image
            src="/company_profile.webp"
            alt="Company Logo"
            width={60}
            height={60}
          />
        </div>
        <div>
          <p>Maiores fuga nam at corporis!</p>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <h4>
            Earum unde enim quam cupiditate incidunt at optio aliquid
            laudantium.
          </h4>
        </div>
      </section>
      <section>
        <div>
          <i>d</i>500 บาท/วัน
        </div>
        <div>
          <i>d</i>พัฒนาชนบท 3 แขวงคลองสองต้นนุ่น เขตลาดกระบัง
        </div>
      </section>
      <section>
        <p>อัปเดตล่าสุด 29 มี.ค. 2025</p>
        <button>ดูรายละเอียด</button>
      </section>
    </div>
  );
}
