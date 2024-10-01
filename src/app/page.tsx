import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8">
      <Link href={"01"} className="hover:underline">
        Zadanie - 01
      </Link>
    </main>
  );
}
