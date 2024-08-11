import "./Projects.css";

import codeXapp from "../assets/projects/codex-3.jpg";
import todolistapp from "../assets/projects/todo-1.jpg";
import quizapp from "../assets/projects/quiz-3.jpg";
import coffeewebsite from "../assets/projects/coffee_website.png";
import loginpage from "../assets/projects/login.png";
import cakewebsite from "../assets/projects/cakeshop.png";
import productManageWebsite from "../assets/projects/productManagement.png";

import { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("all");

  const handleAllClick = () => {
    setFilter("all");
  };

  const handleAppClick = () => {
    setFilter("app");
  };

  const handleWebsiteClick = () => {
    setFilter("website");
  };

  return (
    <div className="project" id="project">
      <h2>Projects</h2>
      <div className="buttons">
        <button onClick={handleAllClick}>All</button>
        <button onClick={handleWebsiteClick}>Website</button>
        <button onClick={handleAppClick}>Applications</button>
      </div>
      <div className="project-screenshots">
        {(filter === "all" || filter === "app") && (
          <div className="project-card">
            <img src={codeXapp} />
            <h4>CodeX Technologies App</h4>
          </div>
        )}
        {(filter === "all" || filter === "app") && (
          <div className="project-card">
            <img src={quizapp} />
            <h4>Quiz App</h4>
          </div>
        )}
        {(filter === "all" || filter === "app") && (
          <div className="project-card">
            <img src={todolistapp} />
            <h4>TodoList App</h4>
          </div>
        )}
        {(filter === "all" || filter === "website") && (
          <div className="project-card">
            <img src={coffeewebsite} />
            <h4>Coffee_Website</h4>
          </div>
        )}
        {(filter === "all" || filter === "website") && (
          <div className="project-card">
            <img src={cakewebsite} />
            <h4>CakeShop_Website</h4>
          </div>
        )}
        {(filter === "all" || filter === "website") && (
          <div className="project-card">
            <img src={loginpage} />
            <h4>Sinup & Login Page</h4>
          </div>
        )}
        {(filter === "all" || filter === "website") && (
          <div className="project-card">
            <img src={productManageWebsite} />
            <h4>ProductManagement_website</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
