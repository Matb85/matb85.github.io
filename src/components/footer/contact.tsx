import { component$, useStylesScoped$, useStore, $ } from "@builder.io/qwik";
import H from "../utils/h";
import contact from "./contact.css?inline";
import { GithubProfile, LinkeInProfile, email, phone } from "../utils/utils";
export default component$(() => {
  useStylesScoped$(contact);

  const store = useStore({ email: "", name: "", message: "" });
  const status = useStore({ error: "", className: "" });
  const emailRegex =
    // eslint-disable-next-line no-control-regex
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const submit = $(async (e: Event) => {
    e.preventDefault();

    const TimeOfLastEmail = localStorage.getItem("TimeOfLastEmail");
    if (TimeOfLastEmail && Date.now() - parseInt(TimeOfLastEmail) < 2 * 1000 * 60) {
      status.error = "You can send email only every 5 minutes";
      return;
    }
    if (store.email.length < 5 || store.name.length < 5 || store.message.length < 5) {
      status.error = "Fill in all the fields correctly.";
      return;
    }
    if (!emailRegex.test(store.email)) {
      status.error = "Make sure the email is correct.";
      return;
    }
    status.error = "";
    status.className = "sending";
    try {
      const response = await fetch("https://assets.redinnlabs.com/email", {
        method: "POST",
        body: JSON.stringify(store),
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.status);
      if (response.status == 200) {
        store.email = store.name = store.message = "";
        localStorage.setItem("TimeOfLastEmail", Date.now().toString());
        status.className = "success";
        setTimeout(() => (status.className = ""), 1500);
      } else {
        status.error = "Hmmm... An error occured. Try again later.";
        status.className = "";
      }
    } catch (_) {
      status.error = "Hmmm... An error occured. Try again later.";
      status.className = "";
    }
  }) as any;

  const text = "Contact + CV";

  return (
    <>
      <H text={text} />
      <section class="contact w-full px-4 md:px-20 flex flex-col lg:flex-row gap-8 justify-center overflow-hidden">
        <form onSubmit$={submit} preventdefault:submit data-aos="fade-right" class="text_border say_hello ">
          <h4 class="text-2xl sm:text-4xl">Say hello</h4>
          <input
            type="text"
            placeholder="Your name"
            onInput$={e => (store.name = (e.target as HTMLInputElement).value)}
          />
          <hr />
          <input
            type="text"
            placeholder="Your email"
            onInput$={e => (store.email = (e.target as HTMLInputElement).value)}
          />
          <hr />
          <textarea placeholder="Your message" onInput$={e => (store.message = (e.target as HTMLInputElement).value)} />
          <hr />
          <p class="text-base h-5 mt-4 text-[#f5426f]">{status.error}</p>
          <div class="w-full mt-8 flex flex-col-reverse gap-2 text-base items-end">
            <a href={"tel:" + phone} class="hover:underline">
              {phone}
            </a>
            <a href={"mailto:" + email} class="hover:underline">
              {email}
            </a>

            <button class={"btn " + status.className}>
              <span>Send message</span>
              <span>Sending...</span>
              <span>Success!</span>
            </button>
          </div>
        </form>
        <div data-aos="fade-left" class="cr_flex text_border relative flex flex-wrap justify-center gap-y-4 gap-x-4">
          <h4 class="text-2xl sm:text-4xl w-full">My CV & Links</h4>
          <a href="resume.pdf" target="_blank" class="btn md:text-2xl w-48 md:w-80 !px-0 text-center py-4">
            Download resume
          </a>
          <a href={LinkeInProfile} target="_blank" class="btn md:text-2xl w-48 md:w-80 !px-0 text-center py-4">
            LinkedIn profile
          </a>
          <a href={GithubProfile} target="_blank" class="btn md:text-2xl w-48 md:w-80 !px-0 text-center py-4">
            Github profile
          </a>
        </div>
      </section>
    </>
  );
});
