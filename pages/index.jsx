import Image from "next/image";
import Head from "next/head";

import { Player } from "@lottiefiles/react-lottie-player";

import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";
import Button from "../components/UI/Button";

import elipse from "../public/assets/svg/elipse.svg";
import replaiFirstAnimation from "../public/assets/animations/replai_first_animation.json";
import replaiSecondAnimation from "../public/assets/animations/replai_second_animation.json";
import rule1 from "../public/assets/image/rule_1.png";
import rule2 from "../public/assets/image/rule_2.png";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Replai</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/assets/svg/fav_icon.svg" />
      </Head>

      {/* hero --section */}
      <section className="min-h-[90vh] mx-[6.25rem] mb-[10vh] flex flex-row justify-between items-center">
        <Image
          src={elipse}
          alt="elipse"
          className="absolute top-0 right-0 w-[45vw]"
        />
        {/* text */}
        <div className="w-[50%]">
          <h1>
            Repl<span className="text-blueColor">ai</span> automatically <br />
            hides irrelevant Instagram <br /> comments in real-time
          </h1>
          <p className="mt-[1.675rem] mb-[3.25rem]">
            keep your Instagram posts clean of irrelevant comments, with the
            power of artificial intelligence
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
              className=" h-[80vh] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="h-[90vh] mx-[6.25rem] mb-[10vh] flex flex-row-reverse items-center">
        <div className="w-[40%]">
          <h3>
            Don't even think about <br />
            closing your comments
          </h3>
          <p className="mt-[1.25rem]">
            Replai is your eyes! It hides irrelevant comments in <br />
            the absence of you, automatically and in real time
          </p>
        </div>
        <div className="w-[55%] flex justify-start">
          <Player
            autoplay={true}
            loop={true}
            src={replaiSecondAnimation}
            className="w-[520.5px] drop-shadow-2xl"
          />
        </div>
      </section>

      <section className="h-[90vh] mx-[6.25rem] mb-[10vh] flex flex-row justify-between items-center">
        <div className="w-[45%]">
          <h3>
            Just say what kind of <br />
            content you don't like to be shown <br />
            under your posts
          </h3>
          <p className="mt-[1.25rem]">
            Replai currently can realize political, religous,
            <br /> negative, disrespectful & profanity contents in texts
          </p>
        </div>
        <div className="w-[50%] flex justify-end">
          <Image
            src={rule1}
            alt="rule1"
            className=" w-[240px] mr-6 -translate-y-8 drop-shadow-xl"
          />
          <Image
            src={rule2}
            alt="rule2"
            className=" w-[240px] drop-shadow-xl translate-y-12"
          />
        </div>
      </section>

      {/* give try replai --section */}
      <section
        className="w-[90%] m-auto h-[80vh] flex flex-col justify-center items-center mb-[20vh] rounded-2xl
        bg-blueColor bg-cover bg-center
      "
        style={{
          backgroundImage: `url('/assets/image/give_replai_try.png')`,
        }}
      >
        <p className="w-[600px] mb-[3rem] text-center text-5xl text-whiteColor">
          Look at how Replai makes <br />
          your life more pleasant
        </p>
        <Button className="bg-whiteColor text-blueColor cursor-pointer">
          Try Replai
        </Button>
      </section>

      <Footer />
    </Layout>
  );
}

export default HomePage;
