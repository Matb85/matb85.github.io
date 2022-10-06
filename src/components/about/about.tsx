import { component$ } from "@builder.io/qwik";
import H from "../h";

export default component$(() => {
  const text = "About me";
  return (
    <>
      <H text={text} />
    </>
  );
});
