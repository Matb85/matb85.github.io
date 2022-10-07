import { component$, useClientEffect$, useStore } from "@builder.io/qwik";
import { Logo } from "../icons/qwik";

export const scroll = (store: { opacity: number; y: number; bg: string }) => {
  if (window.scrollY > window.innerHeight || window.scrollY < 10) {
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
};

export default component$(() => {
  const store = useStore({
    opacity: 0,
    y: -100,
    bg: "bg-primary-200",
  });
  const email = "mateuszbis85@gmail.com";
  useClientEffect$(() => {
    scroll(store);
    window.addEventListener("scroll", () => scroll(store));
  });
  return (
    <section
      style={"transform: translateY(" + store.y + "%);"}
      class={"fixed transition-transform top-0 w-full h-20 backdrop-blur cr_flex bg-opacity-40 z-50 " + store.bg}
    >
      <a href={"mailto:" + email} class="hidden sm:block absolute left-4">
        {email}
      </a>
      <Logo className="h-16 w-16 mx-auto" />
      <a class="absolute right-4 transition-opacity" href="#" style={"opacity: " + store.opacity}>
        back to top
      </a>
    </section>
  );
});
