import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen flex justify-evenly items-center flex-col">
      <h1 className="lg:text-3xl sm:text-sm ">
        {" "}
        <span className="text-decoration-line: underline font-extrabold">
          Phone Number:
        </span>{" "}
        (+1) 587-966-2159
      </h1>
      <h1 className="lg:text-3xl sm:text-sm">
        {" "}
        <span className="text-decoration-line: underline font-extrabold">
          Email:
        </span>{" "}
        saboorali83456@gmail.com
      </h1>
      <h1 className="lg:text-3xl sm:text-sm">
        <span className="text-decoration-line: underline font-extrabold">
          {" "}
          Github:{" "}
        </span>
        <a
          href="https://github.com/QaziSaboorr"
          target="_blank"
          className="text-yellow-600 text-decoration-line: underline font-style: italic  hover:text-red-400 "
        >
          Click here to go to my Github profile.
        </a>
      </h1>
      <h1 className="lg:text-3xl sm:text-sm">
        <span className="text-decoration-line: underline font-extrabold">
          {" "}
          Resume:{" "}
        </span>
        <a
          href="https://github.com/QaziSaboorr/resume/blob/main/qazialiRESUMERECENT2.pdf"
          target="_blank"
          className="text-yellow-600 text-decoration-line: underline font-style: italic  hover:text-red-400 "
        >
          Click here to view my resume.
        </a>
      </h1>
      <h1 className="lg:text-3xl sm:text-sm">
        <span className="text-decoration-line: underline font-extrabold">
          {" "}
          Linkedin:{" "}
        </span>
        <a
          href="https://www.linkedin.com/in/qazi-saboor-ali-231aa4292/"
          target="_blank"
          className="text-yellow-600 text-decoration-line: underline font-style: italic  hover:text-red-400 "
        >
          Click here to view my Linkedin.
        </a>
      </h1>
    </main>
  );
};

export default Contact;
