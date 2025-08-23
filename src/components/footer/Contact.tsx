import React, { useState } from "react";
import H from "../utils/H.tsx";
import { email, GithubProfile, LinkeInProfile, phone } from "../utils/utils";
import "./contact.css";

const Contact: React.FC = () => {
  const [store, setStore] = useState({ email: "", name: "", message: "" });
  const [status, setStatus] = useState({ error: "", className: "" });
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const TimeOfLastEmail = localStorage.getItem("TimeOfLastEmail");
    if (TimeOfLastEmail && Date.now() - parseInt(TimeOfLastEmail) < 2 * 1000 * 60) {
      setStatus({ ...status, error: "You can send email only every 5 minutes" });
      return;
    }
    if (!emailRegex.test(store.email)) {
      setStatus({ ...status, error: "Make sure the email is correct." });
      return;
    }
    if (store.email.length < 5 || store.name.length < 5 || store.message.length < 5) {
      setStatus({ ...status, error: "Fill in all the fields correctly." });
      return;
    }
    setStatus({ ...status, error: "", className: "sending" });
    try {
      const response = await fetch("https://assets.redinnlabs.com/email", {
        method: "POST",
        body: JSON.stringify(store),
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        setStore({ email: "", name: "", message: "" });
        localStorage.setItem("TimeOfLastEmail", Date.now().toString());
        setStatus({ ...status, className: "success" });
        setTimeout(() => setStatus({ ...status, className: "" }), 1500);
      } else {
        setStatus({ ...status, error: "Hmmm... An error occurred. Try again later.", className: "" });
      }
    } catch (_) {
      setStatus({ ...status, error: "Hmmm... An error occurred. Try again later.", className: "" });
    }
  };

  const text = "Contact + CV";

  return (
    <>
      <H text={text} />
      <section className="contact w-full px-4 md:px-20 flex flex-col lg:flex-row gap-8 justify-center overflow-hidden max-w-6xl mx-auto mt-12">
        <form
          onSubmit={submit}
          data-aos="fade-right"
          className="contact-card bg-white p-8 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 flex-1"
        >
          <h3 className="text-2xl sm:text-4xl font-primary font-bold mb-6">Say hello</h3>
          <ul className="space-y-6">
            <li className="input-group">
              <input
                type="text"
                autoComplete="given-name"
                placeholder="Your name"
                value={store.name}
                onChange={e => setStore({ ...store, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-400 focus:outline-none transition-colors duration-300 text-primary-700"
              />
            </li>
            <li className="input-group">
              <input
                type="email"
                autoComplete="email"
                placeholder="Your email"
                value={store.email}
                onChange={e => setStore({ ...store, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-400 focus:outline-none transition-colors duration-300 text-primary-700"
              />
            </li>
            <li className="input-group">
              <textarea
                placeholder="Your message"
                value={store.message}
                onChange={e => setStore({ ...store, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-400 focus:outline-none transition-colors duration-300 text-primary-700 resize-vertical"
              />
            </li>
            <li className="text-red-500 -mt-3 h-5 text-center font-medium">{status.error}</li>
          </ul>
          <div className="w-full flex mt-4 flex-col gap-4">
            <button className={`btn contact-btn h-10 max-w-xs mx-auto ${status.className} w-full overflow-hidden`}>
              <span className="relative z-10">Send message</span>
              <span className="relative z-10">Sending...</span>
              <span className="relative z-10">Success!</span>
            </button>
            <div className="flex flex-col gap-3 text-primary-600 pt-2">
              <a
                href={`mailto:${email}`}
                className="hover:text-primary-800 cursor-pointer hover:underline text-center font-medium"
              >
                {email}
              </a>
              <a
                href={`tel:${phone}`}
                className="hover:text-primary-800 cursor-pointer hover:underline text-center font-medium"
              >
                {phone}
              </a>
            </div>
          </div>
        </form>
        <div
          data-aos="fade-left"
          className="contact-card bg-white p-8 rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-all duration-300 flex-1"
        >
          <h3 className="text-2xl sm:text-4xl font-primary font-bold mb-6">CV & Links</h3>
          <div className="flex flex-col gap-4">
            <a href="/resume.pdf" target="_blank" className="btn text-center">
              Download résumé
            </a>
            <a href={LinkeInProfile} target="_blank" className="btn text-center">
              LinkedIn profile
            </a>
            <a href={GithubProfile} target="_blank" className="btn text-center">
              Github profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
