import "./Skills.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import react from "../assets/react.png";
import { FaCheckCircle } from "react-icons/fa";

function Skills() {
  return (
    <div className="my-skills">
      <h1>MySkills</h1>
      <div className="skills">
        <div className="technical-skills">
          <h2>Technical-Skills</h2>
          <div className="article-container">
            <article>
              <img src={html} alt="not found" />
              <div id="html">
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={css} alt="not found" />
              <div id="html">
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>

            <article>
              <img src={javascript} alt="not found" />
              <div id="html">
                <h3>Javascript</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={react} alt="not found" />
              <div id="html">
                <h3>React</h3>
                <p>intermediate</p>
              </div>
            </article>
            <article>
              <img src={mysql} alt="not found" />
              <div id="html">
                <h3>MySQL</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={git} alt="not found" />
              <div id="html">
                <h3>Git</h3>
                <p>Experienced</p>
              </div>
            </article>
          </div>
        </div>

        <div className="professional-skills">
          <h2>Professional-Skills</h2>
          <div className="article-container">
            <article>
              <p>
                <FaCheckCircle />
              </p>
              <div id="html">
                <h3>Creativity</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
            <p>
                <FaCheckCircle />
              </p>
              <div id="html">
                <h3>Communication</h3>
                <p>Experienced</p>
              </div>
            </article>

            <article>
            <p>
                <FaCheckCircle />
              </p>
              <div id="html">
                <h3>Problem Solving</h3>
                <p>intermediate</p>
              </div>
            </article>
            <article>
            <p>
                <FaCheckCircle />
              </p>
              <div id="html">
                <h3>Teamwork</h3>
                <p>Experienced</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
