import { component$, useVisibleTask$, useStore, $ } from "@builder.io/qwik";
import { Logo } from "../icons/qwik";

export default component$(() => {
  const store = useStore({
    opacity: 0,
    y: -100,
    bg: "bg-primary-200",
    oldScroll: 0,
  });

  const scroll = $(() => {
    if (window.scrollY < store.oldScroll || window.scrollY < 20) {
      store.y = 0;
    } else {
      store.y = -100;
    }
    if (window.scrollY > window.innerHeight / 3) {
      store.bg = "bg-primary-200";
      store.opacity = 1;
    } else {
      store.bg = "bg-primary-200";
      store.opacity = 0;
    }
    store.oldScroll = window.scrollY;
  });

  useVisibleTask$(() => {
    store.oldScroll = window.scrollY;
    scroll();
    window.addEventListener("scroll", () => scroll());
  });
  return (
    <section
      style={"transform: translateY(" + 0 + "%); opacity: " + store.opacity}
      class={"fixed transition-all top-0 w-full h-20 backdrop-blur cr_flex bg-opacity-40 z-50 " + store.bg}
    >
      <div class="absolute left-4 flex gap-2">
        <a href="https://github.com/Matb85" target="_blank">
          <img src="/github.svg" alt="Githu Icon" class="w-6 h-6"></img>
        </a>
        <a href="https://www.linkedin.com/in/mateusz-bis-185bb1230/" target="_blank">
          <img src="/linkedin.svg" alt="Githu Icon" class="w-6 h-6"></img>
        </a>
      </div>
      <div class="flex gap-2 items-center">
        <div
          class={
            "hidden sm:block transition-all duration-500 overflow-hidden " +
            (store.y == 0 ? "w-0 opacity-0" : "w-[200px]")
          }
        >
          <h2 class={"text-[3rem] mt-2 block leading-none transition-all"}>Mateusz</h2>
        </div>
        <Logo class="h-16 w-16 mx-auto" />
      </div>
      <a id="back_to_top" class="absolute right-4" href="#">
        back to top
      </a>
    </section>
  );
});
