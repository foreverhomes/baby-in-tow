import React from "react";
import logo from "./branding/logo.svg";
import headerIllustration from "./illustrations/welcome-header.jpg";
import community from "./illustrations/community.png";
import culture from "./illustrations/culture.png";
import eats from "./illustrations/eats.png";
import selfCare from "./illustrations/self-care.png";
import toronto from "./illustrations/toronto.png";
import confetti from "./illustrations/confetti.png";

const WelcomeOverlay = ({ onClose }) => {
  localStorage.setItem("welcomeShown", "true");
  return (
    <div
      className="overlay"
      style={{
        overflowY: "scroll",
        fontSize: "14px"
      }}
    >
      <div className="welcomeSection">
        <img
          className="welcomeHeaderIllustration"
          src={headerIllustration}
          alt="Parents with babies"
        />
        <div className="welcomeHeaderContent">
          <img className="logo" src={logo} alt="Baby in Tow" />
          <div className="welcomeTitle">
            The best local spots for you and baby
          </div>
          <div className="welcomeSubtitle">
            Curated by parents in your community
          </div>
          <button className="getStartedButton" onClick={onClose}>
            Get Started
          </button>
        </div>
      </div>

      <div
        className="welcomeSection"
        style={{
          background: `url(${confetti})`,
          color: "white"
        }}
      >
        <div className="welcomeSectionHeader">
          Like word of mouth, but better.
        </div>
        <div className="welcomeSectionParagraph">
          We scout local businesses and crowdsource baby-tips from other parents
          to bring you the best things to do in your neighbourhood when you have
          a baby in tow.
        </div>
      </div>

      <div
        className="welcomeSection"
        style={{
          backgroundColor: "#ECE5DE"
        }}
      >
        <div className="welcomeSectionHeader">Get out there.</div>
        <div className="welcomeSectionParagraph">
          Even with sleep deprivation, fresh air is good for the soul. Our goal
          is to make it easier for you and baby to get out and enjoy yourselves.
        </div>
        <div className="categorySections">
          <div className="categorySection">
            <img src={eats} alt="Coffee cup" />
            <div className="categoryTitle">Eats</div>
            <div className="categoryDescription">
              Baby-friendly places to grab a bite or a drink.
            </div>
          </div>
          <div className="categorySection">
            <img src={community} alt="Books and blocks" />
            <div className="categoryTitle">Community</div>
            <div className="categoryDescription">
              Local drop-in centres, libraries, and parent groups.
            </div>
          </div>
          <div className="categorySection">
            <img src={selfCare} alt="Manicure and barbell" />
            <div className="categoryTitle">Self Care</div>
            <div className="categoryDescription">
              Places to go for some &quot;me&quot; time - curated for businesses
              that welcome your baby too.
            </div>
          </div>
          <div className="categorySection">
            <img src={culture} alt="Drum and paint palette" />
            <div className="categoryTitle">Culture</div>
            <div className="categoryDescription">
              Baby loving theatres, music classes etc.
            </div>
          </div>
        </div>
      </div>

      <div
        className="welcomeSection"
        style={{
          backgroundColor: "#374B5B",
          color: "white",
          textAlign: "left"
        }}
      >
        <div className="welcomeFooterContent">
          <div className="welcomeSectionParagraph">
            Our first release includes the Toronto East End (Riverside,
            Leslieville, Danforth Village and the Beaches) and we’re expanding!
          </div>
          <div className="welcomeSectionParagraph">
            If you want to get involved in bringing this into your neighbourhood
            or simply have a helpful tip to share{" "}
            <a
              href="mailto:babyintow.to@gmail.com"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "underline"
              }}
            >
              give us a shout!
            </a>
          </div>
        </div>

        <img
          className="torontoIllustration"
          src={toronto}
          alt="Toronto sky line"
        />
      </div>
    </div>
  );
};

export default WelcomeOverlay;
