import { component$ } from "@builder.io/qwik";

export default component$((props: { text: string }) => {
  return (
    <div class="text-center relative mt-20">
      <h3 class="text-8xl absolute w-full top-36">{props.text}</h3>
      {["-mt-[0rem]", "-mt-[11rem]", "-mt-[11rem]"].map(x => (
        <h3 aria-hidden="true" class={"text-[10rem] opacity-10 w-full relative " + x}>
          {props.text}
        </h3>
      ))}
    </div>
  );
});
