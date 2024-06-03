import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Logo } from "../icons/qwik";
import header from "./header.css?inline";
import Photo from "../utils/photo";

export default component$(() => {
  useStylesScoped$(header);

  return (
    <header id="home" class="cr_flex w-full gap-2 md:gap-12  md:pt-4 overflow-hidden relative">
      <img
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos="fade"
        class="translate-x-[-20%] absolute top-48 md:top-20 -left-32"
        src="./arrows.svg"
        alt="arrow"
        loading="lazy"
      />
      <img
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos="fade"
        class="translate-x-[20%] absolute bottom-0 md:bottom-20 -right-32"
        src="./arrows.svg"
        alt="arrow"
        loading="lazy"
      />
      <div class="showcase items-end">
        <Photo
          class="w-3/4 md:w-auto md:h-[calc(100vh-10rem)] min-h-[400px] relative z-10 object-contain"
          src="poznajgory-mobile.webp"
          alt="Poznaj Góry"
          sizes={[480, 720]}
        />
        <h2 class="left mt-2" data-aos-offset="0" data-aos-delay="0" data-aos="fade-right">
          Full Stack developer
        </h2>
      </div>

      <div class="logo" data-aos="zoom-in-up">
        <Logo class="wh_full absolute top-0 scale-[1.7] opacity-10 " />
        <Logo class="wh_full absolute top-0" />
        <p class="absolute -top-[2rem] w-full text-center text-[3rem]">Mateusz</p>
      </div>

      <p class="md:hidden absolute top-8 w-full text-center text-5xl">Mateusz Bis</p>

      <div class="showcase items-start">
        <h2 data-aos="fade-left" class="right mb-2">
          UI/UX designer
        </h2>
        <Photo
          class="w-3/4 md:w-auto md:h-[calc(100vh-10rem)] min-h-[400px] relative z-10 object-contain"
          src="oceanpeace-mobile.webp"
          alt="Ocean Peace"
          sizes={[480, 720]}
        />
      </div>
    </header>
  );
});
