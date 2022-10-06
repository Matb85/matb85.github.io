import { component$ } from "@builder.io/qwik";
import { normalise } from "./utils";

export default component$((props: { text: string }) => {
  return (
    <div id={normalise(props.text)} class="text-center relative mt-32 mb-10 md:mt-44 md:mb-20 w-full">
      <h3 class="text-4xl sm:text-6xl xl:text-8xl absolute md:top-10 w-full">{props.text}</h3>
      {["", "", ""].map(x => (
        <h3
          aria-hidden="true"
          class={"text-4xl sm:text-6xl md:text-8xl xl:text-9xl !leading-[0.4] opacity-10 whitespace-nowrap " + x}
        >
          {props.text}
        </h3>
      ))}
    </div>
  );
});
