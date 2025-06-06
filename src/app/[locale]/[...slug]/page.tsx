// app/[locale]/[...slug]/page.tsx
import { notFound } from "next/navigation";

export default function CatchAllPage() {
  notFound(); // trigger ไป not-found.tsx
}
