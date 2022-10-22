import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Logo } from "../icons/qwik";
import header from "./header.css?inline";
import Photo from "../utils/photo";

export default component$(() => {
  useStylesScoped$(header);

  return (
    <header id="home" class="cr_flex w-full sm:gap-12 pt-48 md:py-20 overflow-hidden relative">
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
          className="w-3/5 sm:w-auto sm:h-[75vh] relative z-10 object-contain"
          src="poznajgory-mobile.webp"
          alt="Poznaj Góry"
          sizes={[480, 720]}
        />
        <h2 data-aos-offset="0" data-aos-delay="0" data-aos="fade-right" class="left">
          Web developer
        </h2>
      </div>

      <div class="logo" data-aos="zoom-in-up">
        <Logo className="wh_full absolute top-0 scale-[1.7] opacity-10 " />
        <Logo className="wh_full absolute top-0" />
      </div>

      <div class="showcase items-start">
        <h2 data-aos="fade-left" class="right">
          UI/UX designer
        </h2>
        <Photo
          className="w-3/5 sm:w-auto sm:h-[75vh] relative z-10 object-contain"
          src="oceanpeace-mobile.webp"
          alt="Ocean Peace"
          sizes={[480, 720]}
        />
      </div>
    </header>
  );
});
