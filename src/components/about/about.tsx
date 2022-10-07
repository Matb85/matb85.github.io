import { component$ } from "@builder.io/qwik";
import H from "../h";

export default component$(() => {
  const text = "About me";
  return (
    <>
      <H text={text} />
      <section class="w-full px-4 md:px-20 flex flex-col-reverse lg:flex-row gap-8 justify-center">
        <p data-aos="fade-right" class="w-full lg:w-1/2 text_border">
          Hi, My name is Mateusz Bis, welcome to my portfolio! I'm a web developer since 2018, and a Google certified UX
          designer since 2021. Through my career, I've had a chance to work on a variety of projects, from static
          websites through backend application to android apps. I love experimenting with designs, which means I often
          start with a sheet of paper to try out lots of versions. After work, I'm a keen runner, a photography amateur
          and a coffee lover. I bet our cooperation will be fruitful!
        </p>
        <img data-aos="fade-left" src="/i.svg" class="w-full mx-auto lg:w-1/2" alt="interests" />
      </section>
    </>
  );
});
