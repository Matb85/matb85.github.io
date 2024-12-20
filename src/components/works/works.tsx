import { component$ } from "@builder.io/qwik";
import H from "../utils/h";
import Work from "./work";

export default component$(() => {
  const text = "Case Studies";
  return (
    <>
      <H text={text} />
      <div
        data-aos="fade-right"
        class="text_border relative mx-auto text-center w-11/12 max-w-5xl !leading-[1.8] flex flex-col gap-4 mb-8"
      >
        <p>
          Here are the 3 <b>Case Studies</b> I crafted for the <b>Google UX Certification</b>.
        </p>
      </div>
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
