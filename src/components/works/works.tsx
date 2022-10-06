import { component$ } from "@builder.io/qwik";
import H from "../h";
import Work from "./work";

export default component$(() => {
  const text = "Selected Works";
  return (
    <>
      <H text={text} />
      <Work data={{ img: "/show/poznajgory-show.png", name: "Poznaj Góry", desc: "Webportal devoted to mountains" }} />
      <Work data={{ img: "/show/oceanpeace-show.png", name: "Ocean Peace", desc: "Digital wellbeing app" }} />
      <Work data={{ img: "/show/echopienin-show.png", name: "Echopienin", desc: "Website for an apartment rental" }} />
    </>
  );
});
