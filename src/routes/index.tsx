import { component$, useClientEffect$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/index/about";
import Footer from "~/components/footer/footer";
import Header from "~/components/index/header";
import Projects from "~/components/works/projects";
import Works from "~/components/works/works";
import aos from "aos";
import "aos/dist/aos.css";
export default component$(() => {
  useClientEffect$(() => {
    async function callback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
      entries.forEach(entry => {
        if (entry.intersectionRatio <= 0) return;
        const target = entry.target as HTMLImageElement;
        target.addEventListener("load", () => target.classList.add("loaded"));
        target.srcset = target.dataset.srcset as string;
        observer.unobserve(target);
      });
    }
    /** set up a new IntersectionObserver if in the browser */
    const observer = new IntersectionObserver(callback, { rootMargin: "0px", threshold: 0.05 });

    // utility for add images to the store add setting up proper event listeners
    function addImages(imgs: NodeListOf<HTMLImageElement>) {
      imgs.forEach(img => {
        observer.observe(img);
      });
    }

    // observe all images
    addImages(document.querySelectorAll(".lazy-photo") as NodeListOf<HTMLImageElement>);
    aos.init({
      offset: 250,
      duration: 300,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return (
    <main>
      <Header />
      <About />
      <Works />
      <Projects />
      <Footer />
    </main>
  );
});

const title = "Matesz Bis - Portfolo";
const desc = "Hi, my name is Mateusz Bis, I'm a web developer and a UI/UX designer. Welcome to my portfolio!";
export const head: DocumentHead = {
  title,
  meta: [
    { name: "description", content: desc },
    { property: "og:title", content: title },
    { property: "og:description", content: desc },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: title },
    { property: "og:url", content: "https://matb85.github.io/portfolio/" },
    { property: "og:type", content: "website" },
    { property: "og:type", content: "website" },
  ],
};
