import React from "react";
import yourImage from "../images/IMG_1250.jpeg";

const AboutMe = () => {
  return (
    <>
      <main Class="lg:flex lg:h-[900px] sm:h-[700px] sm:block">
        <div Class="flex justify-center items-center w-2/3">
          <p Class="font-sans lg:text-2xl px-5 py-5 lg:w-1/2 sm:text-[1px] container ">
            {" "}
            I am a driven individual hailing from Karachi, with a deep-rooted
            passion for software engineering and a strong desire to contribute
            to a team's success. Currently, I am pursuing my dreams as a
            software engineering student at the University of Calgary, where I
            am honing my technical skills and expanding my knowledge in the
            field. Beyond the world of coding and algorithms, I find solace in
            the thrill of sports like football and cricket, which not only keep
            me physically active but also teach valuable lessons in teamwork and
            perseverance. Additionally, I am a dedicated gym-goer, as I believe
            in maintaining a healthy body to support a sharp mind. In essence,
            my journey is an amalgamation of ambition, dedication, and a love
            for both the digital realm and the physical world of sports and
            fitness.
          </p>
        </div>
        <div Class="flex justify-center items-center w-1/3  border-green border-2 container ">
          <img
            src={yourImage}
            Class="lg:h-1/3 lg:w-1/2 rounded-5xl sm:h-1/4 sm:w-1/3 sm:px-10 "
          />
        </div>
      </main>
    </>
  );
};

export default AboutMe;
