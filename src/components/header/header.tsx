import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Logo } from "../icons/qwik";
import header from "./header.css?inline";
export default component$(() => {
  useStylesScoped$(header);
  return (
    <header id="home" class="header w-full cr_flex pt-48 sm:pt-20 sm:gap-12 overflow-hidden">
      <div class="flex flex-col items-end gap-4 flex-none sm:flex-auto">
        <img src="/mobile/poznajgory-mobile.png" alt="poznajgóry" loading="lazy" class="w-3/5" />
        <h2 class="left">UI/UX designer</h2>
      </div>

      <div class="logo">
        <Logo className="wh_full absolute top-0 scale-[1.7] opacity-10 " />
        <Logo className="wh_full absolute top-0" />
      </div>

      <div class="flex flex-col items-start gap-4 flex-none sm:flex-auto">
        <h2 class="right">Web developer</h2>
        <img src="/mobile/oceanpeace-mobile.png" alt="poznajgóry" loading="lazy" class="w-3/5" />
      </div>
    </header>
  );
});