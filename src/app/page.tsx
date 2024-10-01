import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col p-8">
      <a
        href="https://github.com/liliankaa/bartusiowe_zadania"
        className="text-2xl hover:underline"
      >
        Github
      </a>
      <Link href={"01"} className="mt-4 hover:underline">
        Zadanie - 01
      </Link>
    </main>
  );
}
