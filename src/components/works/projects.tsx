import { component$ } from "@builder.io/qwik";
import H from "../utils/h";
import Photo from "../utils/photo";

export default component$(() => {
  const text = "Other projects";
  const projects = [
    "redinnlabs-ss.webp",
    "amforest-ss.webp",
    "echopienin-ss.webp",
    "zygmuntowka-ss.webp",
    "poznajgory-ss.webp",
    "zygmuntowka-ss.webp",
  ];
  return (
    <>
      <H text={text} />
      <section class="w-full overflow-hidden">
        <div data-aos="fade-up" class="flex flex-nowrap w-full gap-4 px-4 overflow-x-auto">
          {projects.map(p => (
            <a href="#" class="w-4/5 lg:w-1/3 flex-none">
              <Photo className="w-full object-cover" src={p} alt="project" sizes={[480, 720, 1280]} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
});
