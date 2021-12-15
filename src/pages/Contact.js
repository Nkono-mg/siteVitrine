import React from "react";
import ButtonsBottom from "../component/ButtonsBottom";
import Mouse from "../component/Mouse";
import Navigation from "../component/Navigation";
import Logo from "../component/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../component/SocialNetwork";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>Antananarivo</p>
              <p>Ankadindratombo</p>
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
      </div>
    </main>
  );
};

export default Contact;
