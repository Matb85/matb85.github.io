import { component$ } from "@builder.io/qwik";
import Contact from "~/components/footer/contact";
import Joke from "~/components/footer/joke";

export default component$(() => {
  return (
    <>
      <Contact />
      <Joke />
      <footer class="mt-16 pb-32 w-full text-center py-4">
        © Mateusz Bis {new Date().getFullYear()}. Have a great day!
      </footer>
    </>
  );
});
