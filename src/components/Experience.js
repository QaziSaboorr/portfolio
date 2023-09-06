import React from "react";
import work from "../images/work.jpeg";

const Experience = () => {
  return (
    <div className="container m-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20 py-40 h-screen sm:grid-cols-1">
      <div className="flex-col justify-start items-start sm:justify-center sm:items-center">
        <h1 className="text-decoration-line: underline font-bold text-3xl">
          Data Analyst
        </h1>
        <p className="my-4 font-serif text-lg">
          During my time as an undergraduate student, I had the opportunity to
          work as a data analyst with the University of Calgary's GeoS group
          research group. I worked there for 4 months during summers.{" "}
          <a
            className=" hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic "
            href="https://www.ucalgary.ca/labs/geothermal-energy/centre"
            target="_blank"
          >
            Learn more about University of Calgary Geo's group over here.
          </a>{" "}
          I was part of a three-person team, and our main task was to enhance
          the performance of a physics-based model called the "softsensor." This
          model was crucial for predicting drilling data in the GeoS web
          application. To achieve this goal, I primarily utilized Python and its
          libraries like Matplotlib and NumPy for data analysis and
          visualization. Additionally, we maintained our code using Git and
          GitHub to ensure collaborative and efficient development. I'm proud to
          say that during my tenure, I successfully implemented a feature that
          significantly improved the softsensor's performance, contributing to
          the overall success of the project.
        </p>
        <p className="my-4 font-serif text-lg">
          I was assigned the task of enhancing the softsensor model's
          performance, with a particular focus on rotary drilling data. This
          involved developing a method to extract and integrate the rotary
          drilling data into the model's input, as the softsensor primarily
          emphasized rotary drilling while we also had slide drilling data.
        </p>
        <a
          className=" hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          href="http://136.159.140.62/Login"
          target="_blank"
        >
          Click here to check the GeoS's website
        </a>
      </div>
      <div className="text-3xl flex-col justify-center items-center">
        <img src={work} className="h-1/2 w-1/2" />
        <p className="text-xs text-blue-600">
          Picture with my research supervisor Dr Roman Shor and my two
          co-workers !
        </p>
      </div>
    </div>
  );
};

export default Experience;
