import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[100px] bg-grayColor flex items-center justify-center">
      <Link href="https://roshan-ai.ir" className="text-lg">
        Roshan
      </Link>
    </footer>
  );
}
