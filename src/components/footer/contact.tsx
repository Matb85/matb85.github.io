import { component$, useStylesScoped$ } from "@builder.io/qwik";
import H from "../h";
import contact from "./contact.css?inline";

export default component$(() => {
  useStylesScoped$(contact);

  const text = "Contact";
  return (
    <>
      <H text={text} />
      <section class="contact -full px-4 md:px-20 flex flex-col lg:flex-row gap-8 justify-center">
        <div data-aos="fade-right" class="text_border say_hello ">
          <h4 class="text-4xl">Say hello</h4>
          <input type="text" placeholder="Your name" />
          <hr />
          <input type="text" placeholder="Your email" />
          <hr />
          <input type="text" placeholder="Your message" />
          <hr />
          <button class="btn text-base">Say hello</button>
        </div>
        <div data-aos="fade-left" class="cr_flex text_border relative">
          <h4 class="text-4xl absolute top-12 left-12">My CV</h4>
          <button class="btn sm:text-2xl md:text-4xl py-4 px-12 absolute">Download my CV</button>
        </div>
      </section>
    </>
  );
});
