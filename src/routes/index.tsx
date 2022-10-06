import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/about/about";
import Header from "~/components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <About></About>
    </>
  );
});

export const head: DocumentHead = {
  title: "2Welcome to Qwik",
};
