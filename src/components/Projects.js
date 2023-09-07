import React from "react";
import calculator from "../images/calculator.jpeg";
import weather from "../images/weather-feather.jpeg";
import weatherbetter from "../images/weather-featherbutbetter.jpeg";
import tictact from "../images/tic-tac-toe.jpeg";
import textutils from "../images/text-utils.jpeg";
import inotebook from "../images/inotebook.jpeg";
import wordle from "../images/wordle.jpeg";
import machine from "../images/machine_learning.jpeg";
import assembly from "../images/assembly.jpeg";
import portfolio from "../images/portfolio.jpeg";
import sql from "../images/sql.jpeg";
import stats1 from "../images/statsapp.jpeg";
import stats2 from "../images/statsapp2.jpeg";

const Projects = () => {
  return (
    <div class="container m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20 py-40">
      <div class="tile bg-gray-900 text-white text-center">
        <h1 class="tile-marker">Calculator</h1>
        <img src={calculator} />
        <p className="text-white hover:text-2xl">
          This is a basic calculator and trust me its useable haha. I practiced
          concepts like grid layout, basic designing and some logic. I made this
          app just using HTML, CSS and Vanila Javascript !
        </p>
        <a
          href="https://github.com/QaziSaboorr/calculator"
          target="_blank"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
        >
          Click here to view the source code for this app !
        </a>
        <a
          href="https://calculator-saboor.netlify.app"
          target="_blank"
          className="block hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
        >
          Click here to check out the deployed version !
        </a>
      </div>
      <div class="tile bg-gray-900 text-white text-center">
        <h1 class="tile-marker text-center font-sans text-lg">
          Weather-feather
        </h1>
        <img src={weather} />
        <p className="text-white hover:text-2xl">
          This app was just a great way to play and get comfortable with apis
          call and how to integrate it into my applications. This app used
          openweathermap.org's api. Technologies used were Jquery, HTML and CSS
        </p>
        <a
          href="https://github.com/QaziSaboorr/weather"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to view the source code for this app !
        </a>
        <a
          href="https://weather-feather-saboor.netlify.app"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to check out the deployed version !
        </a>
      </div>
      <div class="tile bg-gray-900 text-white text-center">
        <h1 class="tile-marker">Tic-Tac-Toe</h1>
        <img src={tictact} />
        <p className="text-white hover:text-2xl">
          This one was a fun one to do ! The cool animations used in this game
          was all because of JQuery. It tested my logical thinking and that is
          why this one is one of my favourite. I used JQuery , HTML AND CSS to
          build this game.
        </p>
        <a
          href="https://github.com/QaziSaboorr/tic-tac"
          className="block  hover:text-red-400 text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to view the source code for this app !
        </a>
        <a
          href="https://tic-tac-toe-saboor.netlify.app"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to check out the deployed version !
        </a>
      </div>
      <div class=" tile bg-gray-900 text-white text-center ">
        <h1 class="tile-marker">Wordle</h1>
        <img src={wordle} />
        <p className="text-white hover:text-2xl">
          This app used vanilla javascript, HTML and CSS. Sadly, the api created
          by proffesor does not work anymore hence you cannot test it out. This
          involved logic and cool designing.{" "}
        </p>
        <a
          href="https://github.com/ucalgary-ensf381/assignment-05-wordle-QaziSaboorr"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          View the source code here!
        </a>
      </div>
      <div class="tile bg-gray-900 text-white text-center ">
        <h1 class="tile-marker">Text Utils</h1>
        <img src={textutils} />
        <p className="text-white hover:text-2xl">
          I started to dive into world of React starting with this app. This is
          a simple app from which you can perform functions on the text in box.
          The components were built using Bootstrap as core focus was learning
          React framework !
        </p>
        <a
          href="https://github.com/QaziSaboorr/textutils"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to view the source code for this app !
        </a>
        <a
          href="https://qazi-text-utils.netlify.app"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to check out the deployed version !
        </a>
      </div>
      <div class="tile bg-gray-900 text-white text-center ">
        <h1 class="tile-marker">Weather Feather But Better</h1>
        <img src={weatherbetter} />
        <p className="text-white hover:text-2xl">
          This is very similar to previous weather app mentioned aboved. However
          I did not like the design hence I re did it again using React and
          Bootstrap. One more reason was to practice apis in React world !
        </p>
        <a
          href="https://github.com/QaziSaboorr/weatherbetter "
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to view the source code for this app !
        </a>

        <a
          href="https://weather-feather-better.netlify.app"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to check out the deployed version !
        </a>
      </div>
      <div class="tile bg-gray-900 text-white text-center ">
        <h1 class="tile-marker">News App</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BT7cD4n0jjg?si=5yb_UtVG4vjgb2EO"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="h-1/2  w-80 pl-10 "
        ></iframe>
        <p className="text-white hover:text-2xl">
          This was a cool project. I learned a lot of React concepts like
          mapping, props and some more states. However I am not allowed to
          deploy it as the newsapi.org does not allow their api to be used in
          production just development. I guess their free generous trial is not
          so generous after all hahah. Regardless, this app used newsapi.org
          powerfull api and is built with React and Bootstrap !
        </p>
        <a
          href="https://github.com/QaziSaboorr/newsapp"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to view the source code for this app !
        </a>
      </div>

      <div class="tile bg-gray-900 text-white text-center">
        <h1 class="tile-marker">Note App</h1>
        <img src={inotebook} />
        <p className="text-white hover:text-2xl">
          This one was a huge learning curve for me. I had to take a lot of help
          from sources like Chatgpt and Youtube. Mainly because I did a lot of
          frontend prior to this and it was time to dive into world of backend.
          Learning new Technologies like Express, MongoDB was challenging but
          fun! This is a full stack MERN app. UI was created using Bootstrap.
        </p>
        <a
          href="https://github.com/QaziSaboorr/qazisnotebook"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to view the source code for this app !
        </a>

        <a
          href="https://qazisnotebook.onrender.com/Login"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to check out the deployed version !
        </a>
      </div>
      <div class="tile bg-gray-900 text-white text-center ">
        <h1 class="tile-marker">Pet Task Scheduler</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vBEaBBCPJt8?si=Hornzn9Mnmalty-R"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="h-1/2  w-80 pl-10 "
        ></iframe>
        <p className="text-white hover:text-2xl">
          This one is from my object oriented class in Java which I took with
          University Of Calgary. We worked in team of four and practiced
          maintaing of code using github. We covered cored Java concepts in this
          app from UML to GUI and how to use SQL in Java application !
        </p>
        <a
          href="https://github.com/muneebalichishti01/ENSF380_Final_Project"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to view the source code for this app !
        </a>
      </div>
      <div class="tile bg-gray-900 text-white text-center">
        <h1 class="tile-marker">Machine learning car classifier</h1>
        <img src={machine} />
        <p className="text-white hover:text-2xl ">
          We did this in second year fall semester in my statistics course. We
          trained a machine learning model which can differentiate between
          normal cars and sports cars. This one was a fun one to do and we
          learned new technologies one of them being sklearn that is pythons
          libary and how to preproccess data.
        </p>
        <a
          href="https://github.com/QaziSaboorr/319machinelearning"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to view the source code for this project!
        </a>
      </div>
      <div class=" tile bg-gray-900 text-white text-center">
        <h1 class="tile-marker">Risc V Assembly translation</h1>
        <img src={assembly} />
        <p className="text-white hover:text-2xl">
          I did multiple translation of C code to Assembly language. This was
          very interesting as it gave me deeper understanding of the proccess of
          code written in text is converted to binary or machine code and much
          more stuff at root level !. The screenshot above is from my computer
          and memory organization class which I did in winter 2023 as a second
          year software engineer!{" "}
        </p>
        <a
          href="https://github.com/QaziSaboorr/assembly/tree/main/rars"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Check out all the translations here !
        </a>
      </div>
      <div class="tile bg-gray-900 text-white text-center">
        <h1 class="tile-marker">Pyhton Data Analyzer</h1>
        <img src={stats1} />
        <img src={stats2} />
        <p className="text-white hover:text-2xl">
          This is where I started my coding journey. I never coded in HighSchool
          but after taking my first ever class with University of Calgary in
          fall 2021. I knew this is what I want to do for rest of my life. This
          is a basic stat app using pyhton and its libaries like matplotlib and
          numpy
        </p>
        <a
          href="https://github.com/QaziSaboorr/firsteverproject"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to view the source code for this app !
        </a>
      </div>
      <div class="tile bg-gray-900 text-white text-center ">
        <h1 class="tile-marker">SQL Musuem Project</h1>
        <img src={sql} />
        <p className="text-white hover:text-2xl">
          This is from my fall 2022 data base class which I took with University
          of Calgary. In this project we touch based on all core concepts from
          ER diagrams to formatting data using SQL and writing queries.
        </p>
        <a
          href="https://github.com/QaziSaboorr/ensf300"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to view the source code for this project !
        </a>
      </div>
      <div class="tile bg-gray-900 text-white text-center ">
        <h1 class="tile-marker">Portfolio Website</h1>
        <img src={portfolio} />
        <p className="text-white hover:text-2xl">
          I made this website using React and Tailwindcss. Both these
          technologies made the building experince effortless and fun !.
        </p>
        <a
          href="https://github.com/QaziSaboorr/portfolio"
          className="block  hover:text-red-400  text-red-500 text-decoration-line: underline font-style: italic"
          target="_blank"
        >
          Click here to view the source code for this website !
        </a>
      </div>
    </div>
  );
};

export default Projects;
