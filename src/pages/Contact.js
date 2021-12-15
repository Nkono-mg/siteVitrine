import React from "react";
import ButtonsBottom from "../component/ButtonsBottom";
import Mouse from "../component/Mouse";
import Navigation from "../component/Navigation";
import Logo from "../component/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../component/SocialNetwork";
import ContactForm from "../component/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  const variants = {
    initial: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };
  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="initial"
        initial="out"
        variants={variants}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>Antananarivo</p>
              <p>P44-Sud Ambohipo</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0329865868" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("032 98 658 68 est copié !");
                  }}
                >
                  032 98 658 68
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="nkono209@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("nkono209@gmail.com  est copié !");
                  }}
                >
                  nkono209@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Nkono développeur web - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
