import { component$ } from "@builder.io/qwik";
import photo from "./observer";
interface DataI {
  src: string;
  alt: string;
  className: string;
  sizes: number[];
}
export default component$((props: DataI) => {
  const { genSrcset } = photo("/images/thumbnail_" + props.src, props.sizes);

  return (
    <img
      class={"lazy-photo " + props.className}
      src={"/images/thumbnail_" + props.src}
      data-srcset={genSrcset}
      alt={props.alt}
    />
  );
});
