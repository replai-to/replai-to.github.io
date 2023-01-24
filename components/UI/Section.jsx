import { Player } from "@lottiefiles/react-lottie-player";

import classes from "./Section.module.css";

function Section({ title, description, player }) {
  return (
    <section className={classes.section}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>{player}</div>
    </section>
  );
}

export default Section;
