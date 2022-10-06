import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Logo } from "../icons/qwik";
import header from "./header.css?inline";
import Photo from "../utils/photo";

export default component$(() => {
  useStylesScoped$(header);

  return (
    <header id="home" class="header w-full cr_flex pt-48 sm:pt-20 sm:gap-12 overflow-hidden">
      <div class="flex flex-col items-end gap-4 flex-none sm:flex-auto">
        <Photo className="w-3/5" src="poznajgory-mobile.webp" alt="Poznaj Góry" sizes={[480, 720]} />
        <h2 class="left">UI/UX designer</h2>
      </div>

      <div class="logo">
        <Logo className="wh_full absolute top-0 scale-[1.7] opacity-10 " />
        <Logo className="wh_full absolute top-0" />
      </div>

      <div class="flex flex-col items-start gap-4 flex-none sm:flex-auto">
        <h2 class="right">Web developer</h2>
        <Photo className="w-3/5" src="oceanpeace-mobile.webp" alt="Ocean Peace" sizes={[480, 720]} />
      </div>
    </header>
  );
});
