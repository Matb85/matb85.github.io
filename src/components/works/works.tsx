import { component$ } from "@builder.io/qwik";
import H from "../utils/h";
import Work from "./work";

export default component$(() => {
  const text = "Selected Works";
  return (
    <>
      <H text={text} />
      <seciton class="w-full flex flex-col gap-32 sm:gap-52">
        <Work
          data={{
            img: "oceanpeace-show.webp",
            name: "Ocean Peace",
            desc: "Digital wellbeing app",
            link: "oceanpeace.pdf",
          }}
        />
        <Work
          data={{
            img: "poznajgory-show.webp",
            name: "Poznaj Góry",
            desc: "Webportal devoted to mountains",
            link: "pg.pdf",
          }}
        />
        <Work
          data={{
            img: "etee-show.webp",
            name: "Etee's",
            desc: "Zero-waste shopping made easy",
            link: "etee.pdf",
          }}
        />
      </seciton>
    </>
  );
});
