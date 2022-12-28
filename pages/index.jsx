import Image from "next/image";
import Link from "next/link";

import Button from "../components/UI/Button";
import { Player } from "@lottiefiles/react-lottie-player";

import replaiLogo from "../public/assets/svg/replai_logo.svg";
import giveTryBg from "../public/assets/image/give_replai_try.png";
import elipse from "../public/assets/svg/elipse.svg";
import replaiFirstAnimation from "../public/assets/animations/replai_first_animation.json";
import replaiSecondAnimation from "../public/assets/animations/replai_second_animation.json";
import Section from "../components/UI/Section";
import Footer from "../components/Footer/Footer";

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
      <section className="min-h-[90vh] mx-[6.25rem] mb-[10vh] flex flex-row justify-between items-center">
        <Image
          src={elipse}
          alt=""
          className="absolute top-0 right-0 w-[45vw]"
        />
        {/* text */}
        <div className="w-[50%]">
          <h1>
            Repl<span className="text-blueColor">ai</span> automatically <br />
            hides irrelevant Instagram <br /> comments in real-time
          </h1>
          <p className="mt-[1.675rem] mb-[3.25rem]">
            Replai helps you to keep your Instagram posts <br />
            clean of irrelevant comments, with the power of artificial
            intelligence.
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
              className=" h-[80vh]  drop-shadow-2xl"
              // className="w-[700.5px] drop-shadow-2xl"
              speed={0.7}
            />
          </div>
        </div>
      </section>
      {/* no need comments off --section */}
      <Section
        title="Don't even think about closing your comments"
        description="Replai is your eyes! It hides irrelevant comments in the absence of you, automatically and in real time"
        animationJson={replaiSecondAnimation}
      />

      <Section
        title="Just say what kind of content you don't like to be shown under your posts"
        description="Replai currently can realize political, religous, negative, disrespectful & profanity contents in texts"
        aniamtionJson={undefined}
      />

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

      <Footer />
    </div>
  );
}

export default HomePage;
