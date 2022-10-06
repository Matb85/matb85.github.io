import { component$ } from "@builder.io/qwik";

export default component$((props: { text: string }) => {
  return (
    <div class="relative text-center">
      <h3 class="text-8xl relative top-32">{props.text}</h3>

      {["top-0", "top-14", "top-28"].map(x => (
        <h3 aria-hidden="true" class={"text-[10rem] opacity-10 absolute w-full " + x}>
          {props.text}
        </h3>
      ))}
    </div>
  );
});
