import { component$ } from "@builder.io/qwik";
import H from "../h";
import Work from "./work";

export default component$(() => {
  const text = "Selected Works";
  return (
    <>
      <H text={text} />
      <seciton class="w-full flex flex-col gap-32 sm:gap-52">
        <Work data={{ img: "poznajgory-show.webp", name: "Poznaj Góry", desc: "Webportal devoted to mountains" }} />
        <Work data={{ img: "oceanpeace-show.webp", name: "Ocean Peace", desc: "Digital wellbeing app" }} />
        <Work data={{ img: "echopienin-show.webp", name: "Echopienin", desc: "Website for an apartment rental" }} />
      </seciton>
    </>
  );
});
