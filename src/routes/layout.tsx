import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/nav/nav";

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
    </>
  );
});
