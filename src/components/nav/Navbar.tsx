import React, { useEffect, useRef, useState } from 'react';
import { normalise } from '@/utils/utils';

const Navbar = () => {
  const links = ["Start", "Photography", "Coding + Designing", "Contact + CV"];
  const headers = useRef<HTMLElement[]>([]);
  const [state, setState] = useState({ current: 0, progress: 0, oldCounter: 0, canScroll: true });
  const navRef = useRef<HTMLElement>(null);

  const btnClick = () => {
    if (window.outerWidth > 850) return;
    setState(prevState => ({ ...prevState, canScroll: false }));
    setTimeout(() => {
      navRef.current!.scrollTo({
        top: 0,
        left: (window.scrollY / document.documentElement.scrollHeight) * window.innerWidth,
      });
      setState(prevState => ({ ...prevState, canScroll: true }));
    }, 1000);
  };

  useEffect(() => {
    for (let i = 0; i < links.length; i++) {
      headers.current[i] = document.getElementById(normalise(links[i])) as HTMLElement;
    }
    const scroll_offset = 7 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    const handleScroll = () => {
      for (let i = 0; i < links.length; i++) {
        const next_el = i + 1 < links.length ? headers.current[i + 1].offsetTop : document.documentElement.scrollHeight;
        if (
            (i === 0 && window.scrollY < next_el - scroll_offset) ||
            (window.scrollY >= headers.current[i].offsetTop - scroll_offset && window.scrollY < next_el - scroll_offset)
        ) {
          setState(prevState => ({
            ...prevState,
            current: i,
            progress: 100 - ((next_el + scroll_offset - window.scrollY) / (next_el + scroll_offset - headers.current[i].offsetTop)) * 100,
          }));

          if (window.outerWidth < 850 && state.oldCounter !== state.current && state.canScroll) {
            navRef.current!.scrollTo({
              top: 0,
              left: (window.scrollY / document.documentElement.scrollHeight) * window.innerWidth,
            });
            setState(prevState => ({ ...prevState, oldCounter: state.current }));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    const back = document.getElementById('back_to_top') as HTMLElement;
    back.addEventListener('click', btnClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      back.removeEventListener('click', btnClick);
    };
  }, [links, state.current, state.oldCounter, state.canScroll]);

  return (
      <div className="w-full h-0 flex justify-center items-end fixed bottom-0 md:bottom-4 z-50">
        <nav ref={navRef} className="flex backdrop-blur gap-4 p-4 bg-primary-200 bg-opacity-40 max-w-full overflow-auto">
          {links.map((x, i) => (
              <a
                  key={x}
                  onClick={btnClick}
                  href={"#" + normalise(x)}
                  className="btn flex-none"
                  style={
                    state.current === i
                        ? { '--btn-gradient-width': state.progress + '%', transition: 'none' }
                        : state.current >= i
                            ? { '--btn-gradient-width': '100%' }
                            : {}
                  }
              >
                {x}
              </a>
          ))}
        </nav>
      </div>
  );
};

export default Navbar;
