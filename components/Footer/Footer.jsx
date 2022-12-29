import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[70px] bg-grayColor flex items-center justify-center md:h-[100px]">
      <Link href="https://roshan-ai.ir" className="text-lg">
        Roshan
      </Link>
    </footer>
  );
}
