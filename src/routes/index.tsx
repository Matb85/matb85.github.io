import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/about/about";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import Projects from "~/components/projects/projects";
import Works from "~/components/works/works";

export default component$(() => {
  return (
    <>
      <Header />
      <About />
      <Works />
      <Projects />
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "2Welcome to Qwik",
};
