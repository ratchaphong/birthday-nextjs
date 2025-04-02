import BirthdayUI from "./birthday";

export const metadata = {
  title: "Happy Birthday, My Love 🌻",
  description: "A surprise page full of love and pastel magic 💛✨",
  icons: {
    icon: "/orange.png", // เปลี่ยน favicon เฉพาะหน้านี้
  },
};

export default function BirthdayPage() {
  return <BirthdayUI />;
}
