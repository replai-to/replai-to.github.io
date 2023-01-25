import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { Player } from "@lottiefiles/react-lottie-player";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";

import elipse from "../public/assets/svg/elipse.svg";
import replaiFirstAnimation from "../public/assets/animations/replai_first_animation.json";
import replaiSecondAnimation from "../public/assets/animations/replai_second_animation.json";
import rule1 from "../public/assets/image/rule_1.png";
import rule2 from "../public/assets/image/rule_2.png";
import Section from "../components/UI/Section";

function HomePage() {
  const app_url = "https://app.replai.to";
  return (
    <Layout>
      <Head>
        <title>Replai</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/assets/svg/fav_icon.svg" />
        <link
          rel="preload"
          href="/fonts/Helvetica Neue/HelveticaNeue-Medium.otf"
          as="font"
          type="font/otf"
        />
      </Head>

      {/* hero --section */}
      <section className="min-h-[90vh] mx-[2rem] mb-[10vh] flex flex-row justify-between items-center md:mx-[6.25rem]">
        <Image
          src={elipse}
          alt="elipse"
          className="-z-10 absolute top-0 right-0 w-[45vw]"
        />
        {/* text */}
        <div>
          <h1 className="max-w-[500px]">
            Repl<span className="text-blueColor">ai</span> automatically hides
            irrelevant Instagram comments in real-time
          </h1>
          <p className="mt-[1.675rem] mb-[3.25rem] max-w-[390px]">
            keep your Instagram posts clean of irrelevant comments, with the
            power of artificial intelligence
          </p>
          <Button className="bg-blueColor text-whiteColor">
            <Link href={app_url} className="link">
              Try Replai
            </Link>
          </Button>
        </div>
        {/* animation */}
        <div className="w-[0] md:w-[300px] lg:w-[500px]">
          <Player
            autoplay={true}
            loop={true}
            src={replaiFirstAnimation}
            className="sm:hidden md:block md:w-[300px] lg:w-[500px] h-[80vh] drop-shadow-2xl"
          />
        </div>
      </section>

      <Section
        title="Don't even think about closing your comments"
        description="Replai is your eyes! It hides irrelevant comments in the absence of you, automatically and in real time"
        player={
          <Player
            autoplay={true}
            loop={true}
            src={replaiSecondAnimation}
            className="w-[300.5px] lg:w-[500.5px] drop-shadow-2xl"
          />
        }
      />

      <Section
        title="Just say what kind of content you don't like to be shown under your posts"
        description="Replai currently can realize political, religous, negative,
        disrespectful & profanity contents in texts"
        player={
          <div className="w-[100%] mt-10 flex justify-center">
            <Image
              src={rule1}
              alt="rule1"
              className="-translate-y-0 w-[160px] lg:w-[240px] mr-6 md:-translate-y-8 drop-shadow-xl"
              priority
            />
            <Image
              src={rule2}
              alt="rule2"
              className="translate-y-0 w-[160px] lg:w-[240px] drop-shadow-xl md:translate-y-12"
            />
          </div>
        }
      />

      {/* give try replai --section */}
      <div
        className="w-[90%] m-auto h-[40vh] flex flex-col justify-center items-center mb-[30vh] rounded-2xl
        bg-blueColor bg-cover bg-center md:h-[80vh]
      "
        style={{
          backgroundImage: `url('/assets/image/give_replai_try.png')`,
        }}
      >
        <p className="w-[90%] mb-[3rem] text-center text-4xl text-whiteColor md:text-5xl">
          Look at how Replai makes <br />
          your life more pleasant
        </p>
        <Button className="bg-whiteColor text-blueColor cursor-pointer">
          <Link href={app_url} className="link">
            Try Replai
          </Link>
        </Button>
      </div>

      <Footer />
    </Layout>
  );
}

export default HomePage;
