import { component$, Slot } from "@builder.io/qwik";
import Nav from "../components/nav/nav";
import NavBar from "../components/nav/navbar";

export default component$(() => {
  return (
    <>
      <Nav />
      <NavBar />
      <Slot />
    </>
  );
});
