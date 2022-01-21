import React from "react";
import personalData from "../constants/data";
import SocialLink from "./SocialLink";

const AboutMe = () => {
  return (
    <div className="ml-10 m-10 ">
      <img
        className="rounded-full shadow-xl h-48 w-48"
        src={personalData.avatarUrl}
      />

      <h1 className="text-3xl font-bold pt-5">Lukács Áron-Zsolt</h1>
      <p className="pt-4 text-base font-bold">Software Developer @ WebGurus</p>

      <p className="pt-2text-xs">Miercurea Ciuc, Romania</p>
      <div className="pt-4 flex items-start justify-start gap-3">
        {personalData.social.map((social) => {
          return (
            <SocialLink
              key={social.name}
              link={social.link}
              icon={social.path}
              alt={social.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
