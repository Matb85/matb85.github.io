import { component$, useStylesScoped$ } from "@builder.io/qwik";
import work from "./work.css?inline";
export default component$(() => {
  useStylesScoped$(work);
  return (
    <section class="work">
      <div class="work_border"></div>
      <img class="work_image" src="/op-show.png" alt="Ocean Peace" />
      <div class="work_arrows">
        <img src="/arrows.svg" alt="arrows" />
      </div>
      <div class="work_text">
        <h4 class="text-7xl">OceanPeace</h4>
        <h5 class="text-3xl">Digital wellbeing app</h5>
        <button class="btn">Read the case study</button>
      </div>
    </section>
  );
});
