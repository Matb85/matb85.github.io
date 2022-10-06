import { component$ } from "@builder.io/qwik";
import { Logo } from "../icons/qwik";

export default component$(() => {
  return (
    <header id="home" class="wh_full flex items-center justify-center pt-20 gap-16">
      <div class="flex flex-col items-end">
        <img src="/pg.png" alt="poznajgóry" />
        <h2 class="text-5xl">UI/UX designer</h2>
      </div>
      <div class="w-72 h-72 relative">
        <Logo className="wh_full absolute top-0 scale-150 opacity-10" />
        <Logo className="wh_full absolute top-0" />
      </div>
      <div class="flex flex-col items-start">
        <h2 class="text-5xl">Web developer</h2>

        <img src="/pg.png" alt="poznajgóry" />
      </div>
    </header>
  );
});
