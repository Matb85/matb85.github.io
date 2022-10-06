import { component$, useStylesScoped$ } from "@builder.io/qwik";
import H from "../h";
import contact from "./contact.css?inline";

export default component$(() => {
  useStylesScoped$(contact);

  const text = "Contact";
  return (
    <>
      <H text={text} />
      <section class="-full px-20 flex gap-8 justify-center">
        <div class="text_border say_hello ">
          <h4 class="text-4xl">Say hello</h4>
          <input type="text" placeholder="Your name" />
          <hr />
          <input type="text" placeholder="Your email" />
          <hr />
          <input type="text" placeholder="Your message" />
          <hr />
          <button class="btn text-base">Say hello</button>
        </div>
        <div class="text_border relative flex items-center justify-center">
          <h4 class="text-4xl absolute top-12 left-12">My CV</h4>
          <button class="btn text-4xl py-4 px-12">Download my CV</button>
        </div>
      </section>
    </>
  );
});
