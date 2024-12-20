import { component$, useStyles$ } from "@builder.io/qwik";
import Photo from "../utils/photo";
import work from "./work.css?inline";

interface DataI {
  img: string;
  name: string;
  desc: string;
  link: string;
}

export default component$(({ data }: { data: DataI }) => {
  useStyles$(work);
  return (
    <section data-aos="fade-up" data-aos-offset="150" class="work">
      <div class="work_border"></div>
      <Photo class="work_image" src={data.img} alt={data.name} sizes={[720, 1280, 1920]} />
      <div class="work_arrows">
        <img src="./arrows.svg" alt="arrow" loading="lazy" />
      </div>
      <div class="work_text">
        <h4 class="text-3xl sm:text-4xl xl:text-6xl">{data.name}</h4>
        <h5 class="sm:text-xl xl:text-3xl">{data.desc}</h5>
        <a href={data.link} target="_blank " class="btn w-48 px-0 text-center">
          Read the case study
        </a>
      </div>
    </section>
  );
});
