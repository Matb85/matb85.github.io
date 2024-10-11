import { component$, useSignal } from "@builder.io/qwik";
import H from "../utils/h";
import Photo from "../utils/photo";

export function scroll(el: HTMLElement, dist: number) {
  el.scrollTo({ left: el.scrollLeft + dist, top: 0, behavior: "smooth" });
}

export default component$(() => {
  const text = "Selected Works";
  const projects = [
    { img: "poznajgory-ss.webp", href: "https://poznajgory.pl" },
    { img: "estetic.webp", href: "https://estetic.optimamedical.pl" },
    { img: "optimamedical-ss.webp", href: "https://optimamedical.pl" },
    { img: "redinnlabs-ss.webp", href: "https://redinnlabs.com" },
    { img: "pieninski-potok-ss.webp", href: "https://pieninskipotok.pl" },
    { img: "u-wiktorka-ss.webp", href: "https://domekuwiktorka.pl" },
    { img: "zygmuntowka-ss.webp", href: "https://zygmuntowkaknd.pl" },
    { img: "echopienin-ss.webp", href: "https://echopienin.pl" },
    { img: "fizjopieniny-ss.webp", href: "https://fizjopieniny.pl" },
    { img: "amforest-ss.webp", href: "https://amforest.pl" },
  ];

  const w = useSignal<HTMLElement>();

  return (
    <>
      <H text={text} />
      <div
        data-aos="fade-right"
        class="text_border relative mx-auto text-center w-11/12 max-w-5xl !leading-[1.8] flex flex-col gap-4"
      >
        <p>
          Below are my <b>favourite projects</b> I have worked on so far, click on the images to see the end product.
          Most of them are also displayed on{" "}
          <a href="https://redinnlabs.com" target="_blank" class=" gradient-text">
            Redinn Labs' website
          </a>
          .
        </p>
      </div>
      <div class="hidden mx-auto md:flex justify-center gap-4 text-4xl mb-4">
        <button class="btn pt-0 pb-1" onClick$={() => scroll(w.value as HTMLElement, -300)}>
          ««
        </button>
        <button class="btn pt-0 pb-1" onClick$={() => scroll(w.value as HTMLElement, 300)}>
          »»
        </button>
      </div>
      <section class="w-full overflow-hidden">
        <div ref={w} data-aos="fade-up" class="flex flex-nowrap w-full gap-2 sm:gap-4 px-4 overflow-x-auto">
          {projects.map((p, i) => (
            <a
              key={`project-${i}`}
              href={p.href}
              target="_blank"
              rel="nofollow noopener"
              class="w-4/5 lg:w-1/3 max-w-[66vh] flex-none transition-all hover:brightness-75 "
            >
              <Photo class="w-full object-cover" src={p.img} alt="project" sizes={[480, 720]} />
            </a>
          ))}
        </div>
      </section>
      <div class="mx-auto flex justify-center gap-4 text-4xl mt-4">
        <button class="btn pt-0 pb-1" onClick$={() => scroll(w.value as HTMLElement, -300)}>
          ««
        </button>
        <button class="btn pt-0 pb-1" onClick$={() => scroll(w.value as HTMLElement, 300)}>
          »»
        </button>
      </div>
    </>
  );
});
