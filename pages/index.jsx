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
      {/* no need comments off --section */}
      <section className="h-[90vh] ml-[6.25rem] mb-[10vh] flex flex-row items-center">
        {/* text */}
        <div className="">
          <h3 className="">
            With Replai, you never need to turn your comments off
          </h3>
          <p>Replai automatically hides irrelevent Comments on behalf of you</p>
        </div>
        {/* animation */}
        <div></div>
      </section>

      {/* rules --section */}
      <section className="h-[90vh] ml-[6.25rem] mb-[10vh] flex flex-row items-center">
        {/* text */}
        <div>
          <h3>You just decide what contents should be hidden</h3>
          <p>
            Replai currently can realize political, religous, negative,
            disrespectful & profanity contents in texts
          </p>
        </div>
        {/* animation */}
        <div></div>
      </section>

      {/* give try replai --section */}
      <section className="w-[90%] m-auto h-[90vh] flex items-center mb-[20vh]">
        <div className="w-full h-[500px] bg-blueColor rounded-2xl">
          <Image src={GiveTryBg} alt="try-replai-bg" />
        </div>
      </section>
      <footer className="h-[100px] bg-grayColor flex items-center justify-center">
        <Link href="https://roshan-ai.ir" className="text-lg">
          Roshan
        </Link>
      </footer>
    </div>
  );
}

export default HomePage;
