import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-[#2d102f7d] rounded-lg px-8 py-12 text-white">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello, I'm Amaan!
          </h1>
          <p className="text-white">Welcome to my office</p>
          
          <ul className="leading-9 text-white">
            <li>Know more about me at <a href="https://amaanbhati.tech" className="text-blue-500 hover:underline">My portfolio</a></li>
            <li> You can read my blogs at <a href="https://blog.amaanbhati.tech" className="text-blue-500 hover:underline">Blog site</a></li>
            <li>You can contact me at <a href="https://contact.amaanbhati.tech" className="text-blue-500 hover:underline">My socials</a></li>
          </ul>
          <p className="animate-bounce mt-6 text-white">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl text-white">
            Here are my skillsets 🔥
          </h1>
         
          <p className="mt-3 text-white">
            <b>Libraries and Frameworks 🚀</b>
          </p>
          <ul className="leading-9 text-white">
            <li>ReactJS</li>
            <li>Nextjs</li>
            <li>NodeJS</li>
            <li>TailwindCSS</li>
            <li></li>
          </ul>
          <p className="mt-3 text-white">
            <b>Languages 🔬</b>
          </p>
          <ul className="leading-9 text-white">
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>C++</li>
            <li>SQL</li>
          </ul>
          <p className="animate-bounce mt-6 text-white">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl text-white">
            🤙 Contact me maybe?
          </h1>
          <p className="text-white">
            3d development might not be my niche but I can work on it when required 
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="https://contact.amaanbhati.tech" className="text-blue-500 hover:underline">My contact website/linktree</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
