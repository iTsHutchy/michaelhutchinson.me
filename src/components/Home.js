import React from "react";
import Typed from "react-typed";

const introText = [
  `I am a creative designer and web developer based in Manchester.`,
];

function Home() {
  return (
    <section id="home">
      <h5>hey there, this is my portfolio website.</h5>
      <h1>
        <Typed strings={introText} typeSpeed={60} />
      </h1>
    </section>
  );
}

export default Home;