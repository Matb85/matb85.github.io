import { component$ } from "@builder.io/qwik";
import H from "../utils/h";
import Photo from "../utils/photo";

export default component$(() => {
  const text = "About me";
  return (
    <>
      <H text={text} />
      <p data-aos="fade-right" class="text_border relative mx-auto block text-center w-11/12 max-w-5xl !leading-[1.8]">
        Hi, My name is Mateusz Bis, welcome to my portfolio! I've been a web developer since 2018, a Google certified UX
        designer since 2021 and the founder of the
        <a href="https://redinnlabs.com" target="_blank" class="gradient-text">
          {" "}
          Redinn Labs web agency
        </a>
        . Through my career, I've had a chance to work on a variety of projects, from static websites through backend
        application to android apps. After work, I'm a keen runner, a photography amateur and a coffee lover. I bet our
        cooperation will be fruitful!
      </p>
      <section
        data-aos="fade-right"
        class="w-full p-4 md:p-12 flex flex-col-reverse md:flex-row gap-8 justify-center overflow-hidden"
      >
        <div class="w-full md:w-7/12 relative pr-8 pb-8">
          <Photo
            src="autumn.webp"
            alt="Polish mountains"
            sizes={[480, 720, 1280]}
            class="aspect-[3/2] w-full relative"
          />
          <Photo
            src="bee.webp"
            alt="A bee sitting on a flower"
            sizes={[480, 720]}
            class="aspect-square w-2/5 absolute bottom-0 right-0"
          />
        </div>
        <img data-aos="fade-left" src="/i.svg" class="w-10/12 mx-auto md:w-5/12 object-contain" alt="interests" />
      </section>
    </>
  );
});
