import Image from "next/image";

import Button from "../components/UI/Button";

import ReplaiLogo from "../assets/svg/replai_logo.svg";
import GiveTryBg from "../assets/image/give_replai_try.png";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      <nav className="list-none mt-[1.875rem] ml-[6.25rem]">
        <li className="flex items-center">
          <Image src={ReplaiLogo} alt="replai-logo" />
          <h2 className="ml-2.5">
            Repl<span>ai</span>
          </h2>
        </li>
      </nav>

      {/* hero --section */}
      <section className="h-[90vh] ml-[6.25rem] mb-[10vh] flex flex-row items-center">
        {/* text */}
        <div className="">
          <h1 className="">
            Replai Protects Your Instagram Comments from misbehaviour
          </h1>
          <p>
            Thanks to its Artificial Inteligent, Replai can relieve you from
            irrelevent comments on your posts
          </p>
          <Button>Try Replai</Button>
        </div>
        {/* animation */}
        <div></div>
      </section>
    </div>
  );
}

export default HomePage;
