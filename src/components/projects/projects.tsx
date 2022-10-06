import { component$ } from "@builder.io/qwik";
import H from "../h";

export default component$(() => {
  const text = "Other projects";
  return (
    <>
      <H text={text} />
      <section class="w-full overflow-hidden">
        <div class="flex flex-nowrap w-full gap-4 px-4 overflow-x-auto">
          {["/project.png", "/project.png", "/project.png", "/project.png"].map(p => (
            <a href="#" class="w-1/3 flex-none">
              <img class="w-full object-cover" src={p} alt="project" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
});
