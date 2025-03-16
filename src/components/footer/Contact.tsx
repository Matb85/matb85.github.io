import React, { useState } from 'react';
import H from '../utils/H.tsx';
import { email, GithubProfile, LinkeInProfile, phone } from '../utils/utils';
import './contact.css';

const Contact: React.FC = () => {
  const [store, setStore] = useState({ email: '', name: '', message: '' });
  const [status, setStatus] = useState({ error: '', className: '' });
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const submit = async (e: React.FormEvent) => {
  e.preventDefault();

  const TimeOfLastEmail = localStorage.getItem('TimeOfLastEmail');
  if (TimeOfLastEmail && Date.now() - parseInt(TimeOfLastEmail) < 2 * 1000 * 60) {
    setStatus({ ...status, error: 'You can send email only every 5 minutes' });
    return;
  }
  if (!emailRegex.test(store.email)) {
    setStatus({ ...status, error: 'Make sure the email is correct.' });
    return;
  }
  if (store.email.length < 5 || store.name.length < 5 || store.message.length < 5) {
    setStatus({ ...status, error: 'Fill in all the fields correctly.' });
    return;
  }
  setStatus({ ...status, error: '', className: 'sending' });
  try {
    const response = await fetch('https://assets.redinnlabs.com/email', {
      method: 'POST',
      body: JSON.stringify(store),
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      setStore({ email: '', name: '', message: '' });
      localStorage.setItem('TimeOfLastEmail', Date.now().toString());
      setStatus({ ...status, className: 'success' });
      setTimeout(() => setStatus({ ...status, className: '' }), 1500);
    } else {
      setStatus({ ...status, error: 'Hmmm... An error occurred. Try again later.', className: '' });
    }
  } catch (_) {
    setStatus({ ...status, error: 'Hmmm... An error occurred. Try again later.', className: '' });
  }
};

const text = 'Contact + CV';

return (
    <>
      <H text={text} />
      <section className="contact w-full px-4 md:px-20 flex flex-col lg:flex-row gap-8 justify-center overflow-hidden">
        <form onSubmit={submit} data-aos="fade-right" className="text_border say_hello">
          <h4 className="text-2xl sm:text-4xl">Say hello</h4>
          <input
              type="text"
              autoComplete="given-name"
              placeholder="Your name"
              value={store.name}
              onChange={(e) => setStore({ ...store, name: e.target.value })}
          />
          <hr />
          <input
              type="email"
              autoComplete="email"
              placeholder="Your email"
              value={store.email}
              onChange={(e) => setStore({ ...store, email: e.target.value })}
          />
          <hr />
          <textarea
              placeholder="Your message"
              value={store.message}
              onChange={(e) => setStore({ ...store, message: e.target.value })}
          />
          <hr />
          <p className="text-base h-5 mt-4 text-[#f5426f]">{status.error}</p>
          <div className="w-full mt-8 flex flex-col-reverse gap-2 text-base items-end">
            <a href={`tel:${phone}`} className="hover:underline">
              {phone}
            </a>
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
            <button className={`btn ${status.className}`}>
              <span>Send message</span>
              <span>Sending...</span>
              <span>Success!</span>
            </button>
          </div>
        </form>
        <div data-aos="fade-left" className="text_border">
          <h4 className="text-2xl sm:text-4xl w-full">My CV & Links</h4>
          <div className="mt-4 cr_flex flex-wrap gap-4">
            <a href="resume.pdf" target="_blank" className="btn md:text-2xl w-48 md:w-80 px-0! text-center py-4">
              Download résumé
            </a>
            <a href={LinkeInProfile} target="_blank" className="btn md:text-2xl w-48 md:w-80 px-0! text-center py-4">
              LinkedIn profile
            </a>
            <a href={GithubProfile} target="_blank" className="btn md:text-2xl w-48 md:w-80 px-0! text-center py-4">
              Github profile
            </a>
          </div>
        </div>
      </section>
    </>
);
};

export default Contact;
