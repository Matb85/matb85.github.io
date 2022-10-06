import { component$, useStore, useServerMount$ } from "@builder.io/qwik";
import H from "../h";

export async function fetchJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "text/plain",
      "User-Agent": "Portfolio (https://github.com/Matb85/portfolio)",
    },
  }).then(d => d.text());
  return res;
}

export default component$(() => {
  const text = "Joke for you";

  const store = useStore({ joke: "" });

  useServerMount$(async () => (store.joke = await fetchJoke()));

  return (
    <>
      <H text={text} />
      <section class="w-11/12 mx-auto cr_flex">
        <Quote char="„" />
        <p class="md:text-4xl max-w-3xl leading-relaxed text-center">{store.joke}</p>
        <Quote char="”" />
      </section>
      <button onClick$={async () => (store.joke = await fetchJoke())} class="btn mx-auto mt-4">
        One more
      </button>
    </>
  );
});

export function Quote(props: { char: string }) {
  return (
    <div class="relative leading-none">
      <span class="text-[5rem] md:text-[15rem]">{props.char}</span>
      <span class="text-[5rem] md:text-[15rem] absolute opacity-10 top-1 left-1 sm:top-4 sm:left-4">{props.char}</span>
    </div>
  );
}
