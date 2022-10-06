import { component$ } from "@builder.io/qwik";
import H from "../h";
import Work from "./work";

export default component$(() => {
  const text = "Selected Works";
  return (
    <>
      <H text={text} />
      <Work />
      <Work />
      <Work />
    </>
  );
});
