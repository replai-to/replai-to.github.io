import Image from "next/image";
import replaiLogo from "../../public/assets/svg/replai_logo.svg";
import replaiTypeLogo from "../../public/assets/svg/replai_type-logo.svg";

export default function Nav() {
  return (
    <nav className="mt-[1.875rem] ml-[2rem] list-none md:ml-[6.25rem]">
      <li className="flex items-center">
        <Image
          src={replaiLogo}
          alt="replai-logo"
          className="mr-4 cursor-pointer"
        />
        <Image
          src={replaiTypeLogo}
          alt="replai-type-logo"
          className="cursor-pointer"
        />
      </li>
    </nav>
  );
}
