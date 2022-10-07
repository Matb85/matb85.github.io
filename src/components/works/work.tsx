import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Photo from "../utils/photo";
import work from "./work.css?inline";

interface DataI {
  img: string;
  name: string;
  desc: string;
}

export default component$(({ data }: { data: DataI }) => {
  useStylesScoped$(work);
  return (
    <section data-aos="fade-up" class="work">
      <div class="work_border"></div>
      <Photo className="work_image" src={data.img} alt={data.name} sizes={[720, 1280, 1920]} />
      <div class="work_arrows">
        <img src="/arrows.svg" alt="arrow" loading="lazy" />
      </div>
      <div class="work_text">
        <h4 class="text-3xl sm:text-4xl xl:text-6xl">{data.name}</h4>
        <h5 class="sm:text-xl xl:text-3xl">{data.desc}</h5>
        <button class="btn">Read the case study</button>
      </div>
    </section>
  );
});
