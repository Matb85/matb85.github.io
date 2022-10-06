import { component$ } from "@builder.io/qwik";
import H from "../h";

export default component$(() => {
  const text = "About me";
  return (
    <>
      <H text={text} />
      <section class="w-full px-20 flex gap-8 justify-center">
        <p class="w-1/2 text_border">
          I used the Design Thinking scheme to emphasize with users, define their needs and ideate possible solutions.
          In the process I created: - Empathy map, personas based on 8 interviews with people how use their desktop more
          than 2 hours a day - user journeys, user stories & problem statements based on personas - ideated solutions
          with CrazyEights and Value proposition sticker bo
        </p>
        <img src="/i.svg" class="w-1/2" alt="interests" />
      </section>
    </>
  );
});
