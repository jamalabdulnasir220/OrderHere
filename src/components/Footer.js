import React from "react";
import logoImg from "../utils/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faDev,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-9">
      <div className="lg:px-10">
        <hr className="h-px my-6 lg:mx-auto bg-zinc-600 border-none" />
        <div className="flex justify-between m-auto w-[80%]">
          <div className="w-full lg:w-2/5 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left">
            <div className="pl-4 lg:pl-10">
              <img
                className="w-[10rem] mx-auto lg:mx-0"
                src={logoImg}
                alt="logo"
              />

              <h1 className="text-white">
                DEVELOPED BY{" "}
                <span className="inline-flex">
                  <p className="block mt-2 text-sm  hover:font-bold">
                    ABDUL NASIR JAMAL
                  </p>
                </span>
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                Connect with me and find my corner of web development. Find me
                below!
              </p>

              <div className="flex justify-center lg:justify-start mt-3 -mx-2 text-white text-2xl">
                <a
                  href="https://www.linkedin.com/in/jamalabdulnasir/"
                  className="mx-2 hover:text-gray-400"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href="https://github.com/jamalabdulnasir220"
                  className="mx-2 hover:text-gray-400"
                  aria-label="Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://github.com/jamalabdulnasir220"
                  className="block mt-2 text-sm hover:text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>

          <div className="lg:pr-6 mb-6 lg:mb-0 text-center flex flex-col justify-center">
            <h3 className="text-white font-bold uppercase">Contact</h3>
            <span className="block mt-2 text-sm hover:text-white">
              +233 54-657-3849
            </span>
            <span className="block mt-2 text-sm hover:text-white">
              techwithjamal@gmail.com
            </span>
          </div>
        </div>

        <hr className="h-px my-6 bg-zinc-600 border-none" />

        <div>
          <p className="text-center text-white text-sm lg:text-base">
            © Food Express 2024 - All rights reserved |{" "}
            <span className="inline-flex">
              <p className="block mt-2 hover:font-bold">
                Abdul Nasir Jamal
              </p>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
