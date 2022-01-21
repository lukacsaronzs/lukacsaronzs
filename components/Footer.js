import React from "react";
import personalData from "../constants/data";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-6xl  mx-auto px-4 py-3 ">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>&copy; Lukács Áron. All Rights Reserved.</p>
          </div>
          <div>
            <div>
              Developed by
              <div className="inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300">
                <p className="hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50">
                  Lukács Áron
                </p>
              </div>
            </div>
          </div>
          <div className="space-x-4 flex flex-row items-center">
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
      </div>
    </footer>
  );
};

export default Footer;
