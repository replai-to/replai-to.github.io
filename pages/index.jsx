import Image from "next/image";
import Link from "next/link";

import Button from "../components/UI/Button";
import { Player } from "@lottiefiles/react-lottie-player";

import replaiLogo from "../assets/svg/replai_logo.svg";
import giveTryBg from "../assets/image/give_replai_try.png";
import elipse from "../assets/svg/elipse.svg";
import commentsOnAnimation from "../assets/animations/replai_comments_on.json";

function HomePage() {
  return (
    <div>
      <nav className="mt-[1.875rem] ml-[6.25rem] list-none">
        <li className="flex items-center">
          <Image src={replaiLogo} alt="replai-logo" />
          <h2 className="ml-2.5 font-Impact text-slightyBlack">
            Repl<span className="text-blueColor font-Impact">ai</span>
          </h2>
        </li>
      </nav>

      {/* hero --section */}
      <section className="h-[90vh] mx-[6.25rem] mb-[10vh] flex flex-row justify-between items-center">
        {/* text */}
        <Image src={elipse} alt="" className="absolute top-0 right-0" />
        <div className="w-[40%]">
          <h1>
            Repl<span className="text-blueColor">ai</span> Protects Your
            Instagram Comments from misbehaviour
          </h1>
          <p className="mt-[1.675rem] mb-[3.25rem]">
            Thanks to its Artificial Inteligent, Replai can relieve you from
            irrelevent comments on your posts
          </p>
          <Button className="bg-blueColor text-whiteColor">Try Replai</Button>
        </div>
        {/* animation */}
        <div className="w-[50%]"></div>
      </section>
      {/* no need comments off --section */}
      <section className="h-[90vh] mx-[6.25rem] mb-[10vh] flex flex-row-reverse items-center">
        {/* text */}
        <div className="w-[40%]">
          <h3 className="">
            With Replai, you never need to turn your comments off
          </h3>
          <p className="mt-[1.25rem]">
            Replai automatically hides irrelevent Comments on behalf of you
          </p>
        </div>
        {/* animation */}
        <div className="w-[50%] flex justify-center">
          <Player
            autoplay={true}
            loop={true}
            controls={true}
            src={commentsOnAnimation}
            className="w-[400px] h-[400px] drop-shadow-lg"
          ></Player>
        </div>
      </section>

      {/* rules --section */}
      <section className="h-[90vh] ml-[6.25rem] mb-[10vh] flex  flex-row items-center">
        {/* text */}
        <div className="w-[40%]">
          <h3>
            You just decide what
            <br /> contents should be hidden
          </h3>
          <p className="mt-[1.25rem]">
            Replai currently can realize political, religous, negative,
            disrespectful & profanity contents in texts
          </p>
        </div>
        {/* animation */}
        <div className="w-[50%]"></div>
      </section>

      {/* give try replai --section */}
      <section className="w-[90%] m-auto h-[80vh] mb-[20vh] flex items-center">
        <div className="w-full h-[500px] bg-blueColor rounded-2xl flex flex-col justify-center items-center">
          <Image
            src={giveTryBg}
            alt="try-replai-bg"
            className="fixed z-10 w-full"
          />
          <p className="w-1/3 mb-[3rem] text-center text-4xl text-whiteColor">
            Now give it a try to see how much Replai is pleasing?
          </p>
          <Button className="bg-whiteColor text-blueColor">Try Replai</Button>
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
