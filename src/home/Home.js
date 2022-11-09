import React from "react";
import prof from ".././assets/profile.png";
import "./Home.css";
import TitleSpan from "../home/Titlespan";
import { Typewriter } from "react-simple-typewriter";
import resume from ".././assets/Resume.pdf";

const title = "Animesh Mandal".split("");
const Home = () => {
  return (
    <main id="HomePage">
      <section id="home">
        <div className="home_text">
          <div>
            <h4>Hi, my name is</h4>
          </div>

          <div className="Title">
            {title.map((letter, index) => {
              return (
                <TitleSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TitleSpan>
              );
            })}
          </div>

          <div>
            <h2>
              I'm a {""}
              <span
                className="Span"
                style={{ color: "#4E9F3D", fontWeight: "bold" }}
              >
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Web Developer",
                    "Game Developer",
                    "Graphic Designer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>

          <div className="intro">
            <p>
              I am a Computer Science student with experience building websites
              and web applications.
            </p>
          </div>
          <div>
            <a href={resume} className="btn" download="AnimeshMandal">
              Resume
            </a>
          </div>
        </div>
      </section>
      {/* <div className="right">
        <div className="mail">
          <a href="mailto:animeshmandal4400@gmail.com">
            {" "}
            animeshmandal4400@gmail.com
          </a>
        </div>
      </div> */}

      <section id="about"></section>
    </main>
  );
};

export default Home;
