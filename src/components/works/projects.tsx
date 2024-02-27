import { component$, useSignal } from "@builder.io/qwik";
import H from "../utils/h";
import Photo from "../utils/photo";

export function scroll(el: HTMLElement, dist: number) {
  el.scrollTo({ left: el.scrollLeft + dist, top: 0, behavior: "smooth" });
}

export default component$(() => {
  const text = "Other projects";
  const projects = [
    { img: "redinnlabs-ss.webp", href: "https://redinnlabs.com" },
    { img: "poznajgory-ss.webp", href: "https://poznajgory.pl" },
    { img: "optimamedical-ss.webp", href: "https://okulistakrakow.pl" },
    { img: "amforest-ss.webp", href: "https://amforest.pl" },
    { img: "zygmuntowka-ss.webp", href: "https://zygmuntowkaknd.pl" },
    { img: "echopienin-ss.webp", href: "https://echopienin.pl" },
    { img: "fizjopieniny-ss.webp", href: "https://fizjopieniny.pl" },
  ];

  const w = useSignal<HTMLElement>();

  return (
    <>
      <H text={text} />
      <section class="w-full overflow-hidden">
        <div ref={w} data-aos="fade-up" class="flex flex-nowrap w-full gap-2 sm:gap-4 px-4 overflow-x-auto">
          {projects.map(p => (
            <a
              href={p.href}
              target="_blank"
              rel="nofollow noopener"
              class="w-4/5 lg:w-1/3 flex-none transition-all hover:brightness-75 "
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
