import { Player } from "@lottiefiles/react-lottie-player";

export default function Section({
  title,
  description,
  animationJson,
  className,
}) {
  return (
    <section className="h-[90vh] mx-[6.25rem] mb-[10vh] flex flex-row-reverse items-center">
      <div className="w-[40%]">
        <h3>{title}</h3>
        <p className="mt-[1.25rem]">{description}</p>
      </div>
      <div className="w-[55%] flex justify-left">
        {animationJson && (
          <Player
            autoplay={true}
            loop={true}
            src={animationJson}
            className="w-[520.5px] drop-shadow-2xl"
          />
        )}
      </div>
    </section>
  );
}
