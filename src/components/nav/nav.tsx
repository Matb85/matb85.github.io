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
    if (window.scrollY > window.innerHeight) {
      store.bg = "bg-primary-200";
      store.opacity = 1;
    } else {
      store.bg = "bg-white";
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
      style={"transform: translateY(" + store.y + "%);"}
      class={"fixed transition-transform top-0 w-full h-20 backdrop-blur cr_flex bg-opacity-40 z-50 " + store.bg}
    >
      <Logo class="h-16 w-16 mx-auto" />
      <a id="back_to_top" class="absolute right-4 transition-opacity" href="#" style={"opacity: " + store.opacity}>
        back to top
      </a>
    </section>
  );
});
