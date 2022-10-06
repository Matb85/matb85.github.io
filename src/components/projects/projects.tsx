import { component$ } from "@builder.io/qwik";
import H from "../h";

export default component$(() => {
  const text = "Other projects";
  const projects = [
    "/ss/redinnlabs-ss.png",
    "/ss/amforest-ss.png",
    "/ss/zygmuntowka-ss.png",
    "/ss/poznajgory-ss.png",
    "/ss/zygmuntowka-ss.png",
  ];
  return (
    <>
      <H text={text} />
      <section class="w-full overflow-hidden">
        <div class="flex flex-nowrap w-full gap-4 px-4 overflow-x-auto">
          {projects.map(p => (
            <a href="#" class="w-4/5 lg:w-1/3 flex-none">
              <img class="w-full object-cover" src={p} alt="project" loading="lazy" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
});
