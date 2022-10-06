import { component$ } from "@builder.io/qwik";
import { Logo } from "../icons/qwik";

export default component$(() => {
  return (
    <nav class="fixed top-0 w-full h-20 backdrop-blur flex justify-center items-center bg-slate-200 bg-opacity-40">
      <a href="mailto:hello@mateuszbis.com" class="absolute left-4">
        hello@mateuszbis.com
      </a>
      <Logo className="h-16 w-16 mx-auto" />
      <a class="absolute right-4" href="#">
        back to top
      </a>
    </nav>
  );
});
