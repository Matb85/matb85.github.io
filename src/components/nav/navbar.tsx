import { component$, useClientEffect$, useRef, useStore, $ } from "@builder.io/qwik";
import { normalise } from "../utils/utils";

export default component$(() => {
  const links = ["Home", "About me", "Selected works", "Other projects", "Contact"];
  const headers: HTMLElement[] = [];
  const state = useStore({ current: 0, progress: 0, oldCounter: 0, canScroll: true });
  const nav = useRef<HTMLElement>();

  const btnClick = $(() => {
    if (window.outerWidth > 850) return;
    state.canScroll = false;
    setTimeout(() => {
      nav.current!.scrollTo({
        top: 0,
        left: (window.scrollY / document.documentElement.scrollHeight) * window.innerWidth,
      });
      state.canScroll = true;
    }, 1000);
  });

  useClientEffect$(() => {
    for (let i = 0; i < links.length; i++) headers[i] = document.getElementById(normalise(links[i])) as HTMLElement;
    /** look out! headers have the .scroll-mt-24 class */
    const scroll_offset = 7 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    window.addEventListener("scroll", () => {
      for (let i = 0; i < links.length; i++) {
        /** get the position of the next element, if there is no next element, use the length of the document */
        const next_el = i + 1 < links.length ? headers[i + 1].offsetTop : document.documentElement.scrollHeight;
        /** make the link green only if the headers's offsetTop is between window's scrollY and next header's offsetTop */
        if (
          (i == 0 && window.scrollY < next_el - scroll_offset) ||
          (window.scrollY >= headers[i].offsetTop - scroll_offset && window.scrollY < next_el - scroll_offset)
        ) {
          state.current = i;
          state.progress =
            100 - ((next_el + scroll_offset - window.scrollY) / (next_el + scroll_offset - headers[i].offsetTop)) * 100;

          if (state.oldCounter != state.current && state.canScroll) {
            nav.current!.scrollTo({
              top: 0,
              left: (window.scrollY / document.documentElement.scrollHeight) * window.innerWidth,
            });
            state.oldCounter = state.current;
          }
        }
      }
    });
  });

  return (
    <div class="w-full h-0 flex justify-center items-end fixed bottom-0 md:bottom-4 z-50">
      <nav ref={nav} class="flex backdrop-blur gap-4 p-4 bg-primary-200 bg-opacity-40 max-w-full overflow-auto">
        {links.map((x, i) => (
          <a
            onClick$={btnClick}
            href={"#" + normalise(x)}
            class="btn flex-none"
            style={
              state.current == i
                ? "--btn-gradient-width: " + state.progress + "%;transition: none;"
                : state.current >= i
                ? "--btn-gradient-width: 100%;"
                : ""
            }
          >
            {x}
          </a>
        ))}
      </nav>
    </div>
  );
});
