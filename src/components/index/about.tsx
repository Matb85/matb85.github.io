import { component$ } from "@builder.io/qwik";
import H from "../utils/h";
import Photo from "../utils/photo";

export default component$(() => {
  const text = "About me";
  return (
    <>
      <H text={text} />
      <div
        data-aos="fade-right"
        class="text_border relative mx-auto text-center w-11/12 max-w-5xl !leading-[1.8] flex flex-col gap-4"
      >
        <p>
          <b>Hello!</b> I'm Mateusz Bis, a dedicated and versatile <b>Full Stack Software Engineer</b> with a robust
          background in both development and design.
        </p>
        <p>
          I have been immersed in the tech world since <b>{" 2019"}</b> when back in High School I created{" "}
          <a href="https://redinnlabs.com" target="_blank" class=" gradient-text">
            Redinn Labs
          </a>
          , a <b>web agency</b> which to this day puts performance and quality at the forefront of every project. It has
          enabled me to gain experience across a variety of domains, including the <b> development of websites</b>,{" "}
          <b>interactive web applications</b>, <b>Android apps</b>, <b>backend microservices</b>, and the utilization of{" "}
          <b>AWS & Google Cloud services</b>. With this skillset, I have the means to approach challenges with a
          comprehensive perspective, ensuring that each solution is efficient, scalable, and aligned with client needs.
        </p>
        <p>
          Moreover, my journey in software development has been complemented by <b>various certifications</b> visible on
          my{" "}
          <a href="https://www.linkedin.com/in/mateusz-bis-185bb1230/" target="_blank" class=" gradient-text">
            LinkedIn profile
          </a>
          , with the most important being the{" "}
          <a
            href="https://www.credly.com/badges/ef282292-674e-4a89-a22c-834730b19d42?source=linked_in_profile"
            target="_blank"
            class=" gradient-text"
          >
            Google UX Certification
          </a>
          , achieved in
          <b>{" 2022"}</b>, which has enhanced my ability to craft user-centric digital experiences that are both
          functional and intuitive.
        </p>
        <p>
          <b>Since March 2024</b> I've been honing my skills through an{" "}
          <a href="https://optimamedical.pl" target="_blank" class="gradient-text">
            internship at Optima Medical Group
          </a>
          , where I am contributing to the <b>development of healthcare solutions</b> on their websites. In addition,{" "}
          <b>since January 2022</b> I've been the leader of the software development team at a{" "}
          <a href="https://poznajgory.pl" target="_blank" class=" gradient-text">
            student startup Poznaj Góry
          </a>
          , which aims to create <b>AI Trip Planner</b>, a cloud service that will allow people to plan holidays to the
          mountains in minutes rather than hours. This venture not only allows me to apply my technical expertise but
          also fuels my passion for outdoor exploration and community engagement.
        </p>
        <p>
          I am also a dedicated student of{" "}
          <a href="https://informatyka.agh.edu.pl/en/" target="_blank" class=" gradient-text">
            Computer Science at AGH University of Science and Technology
          </a>{" "}
          in Cracow, Poland, where I have been studying since <b>October, 2023</b>. My academic pursuits provide a
          strong theoretical foundation that complements my practical experience, allowing me to stay abreast of the
          latest advancements in the field.
        </p>
        <p>
          With a <b>proficient command of English</b>, I excel in collaborating with international teams and clients,
          ensuring clear and effective communication. My blend of technical prowess, design skills, and entrepreneurial
          spirit positions me uniquely in the tech landscape, enabling me to deliver exceptional results in every
          endeavor.
        </p>
        <p>
          I am excited about the possibilities that lie ahead and am always eager to take on new challenges that push
          the boundaries of technology and design. Please{" "}
          <a href="/#selected-works" class=" gradient-text">
            feel invited to scroll down
          </a>{" "}
          and look at some of my work below.
        </p>
        Best regards, Mateusz Bis
      </div>
      <section
        data-aos="fade-right"
        class="w-full p-4 md:p-12 flex flex-col-reverse md:flex-row gap-8 justify-center overflow-hidden"
      >
        <div class="w-full md:w-7/12 relative pr-8 pb-8">
          <Photo
            src="autumn.webp"
            alt="Polish mountains"
            sizes={[480, 720, 1280]}
            class="aspect-[3/2] w-full relative"
          />
          <Photo
            src="bee.webp"
            alt="A bee sitting on a flower"
            sizes={[480, 720]}
            class="aspect-square w-2/5 absolute bottom-0 right-0"
          />
        </div>
        <img data-aos="fade-left" src="/i.svg" class="w-10/12 mx-auto md:w-5/12 object-contain" alt="interests" />
      </section>
    </>
  );
});
