import Image from "next/image";
import replaiLogo from "../../public/assets/svg/replai_logo.svg";

export default function Nav() {
  return (
    <nav className="mt-[1.875rem] ml-[2rem] list-none md:ml-[6.25rem]">
      <li className="flex items-center">
        <Image src={replaiLogo} alt="replai-logo" />
        <h2 className="ml-2.5 font-Impact text-slightyBlack">
          Repl<span className="text-blueColor font-Impact">ai</span>
        </h2>
      </li>
    </nav>
  );
}
