import Image from "next/image";
import Link from "next/link";

import Button from "../components/UI/Button";
import { Player } from "@lottiefiles/react-lottie-player";

import replaiLogo from "../public/assets/svg/replai_logo.svg";
import giveTryBg from "../public/assets/image/give_replai_try.png";
import elipse from "../public/assets/svg/elipse.svg";
import replaiFirstAnimation from "../public/assets/animations/replai_first_animation.json";
import replaiSecondAnimation from "../public/assets/animations/replai_second_animation.json";

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
        <Image
          src={elipse}
          alt=""
          className="absolute top-0 right-0 w-[700px] h-[700px]"
        />
        <div className="w-[40%]">
          <h1 className="">
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
        <div className="w-[50%]">
          <div className="w-[600px]">
            <Player
              autoplay={true}
              loop={true}
              src={replaiFirstAnimation}
              className="w-[500px] drop-shadow-2xl"
              // className="w-[700.5px] drop-shadow-2xl"
              speed={0.7}
            />
          </div>
        </div>
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
        <div className="w-[55%] flex justify-left">
          <Player
            autoplay={true}
            loop={true}
            // controls={true}
            src={replaiSecondAnimation}
            // className="w-[430.5px] drop-shadow-2xl"
            className="w-[520.5px] drop-shadow-2xl"
            // speed={0.7}
          />
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
      <section
        className="w-[90%] m-auto h-[80vh] mb-[20vh] flex flex-col justify-center items-center rounded-2xl bg-hello
      "
      >
        <Image
          src={giveTryBg}
          alt="try-replai-bg"
          className="absolute h-[90%] z-10 w-[90%] min-x-[400px]"
        />
        <p className="w-[600px] mb-[3rem] text-center text-5xl text-whiteColor">
          Now give it a try to see how much Replai is pleasing?
        </p>
        <Button className="bg-whiteColor text-blueColor cursor-pointer">
          Try Replai
        </Button>
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
