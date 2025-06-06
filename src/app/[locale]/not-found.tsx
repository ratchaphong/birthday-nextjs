"use client";

import { useEffect } from "react";
import { useRouter, usePathname, redirect } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();

  const locale = pathname.split("/")[1] || "th"; // ดึง locale จาก path

  useEffect(() => {
    redirect(`/birthday`);
  }, [locale, router]);

  return null;
}
