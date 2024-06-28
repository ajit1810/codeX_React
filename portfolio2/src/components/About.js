import "./About.css";
import myImage from "../assets/myImage.png";
function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>Application developer and Web development with proper ui experience</p>
      <div className="about-info">
        <div className="image">
          <img src={myImage} alt="not found" />
        </div>
        <div className="desc">
          <p>
            Hello! I'm a software developer with 1+ year of hands-on experience,
            specializing in a range of technologies including Core Java,
            Advanced Java, Flutter, React.js, and version control with Git and
            GitHub.
            <br />
            <br />
            Flutter:-
            <br />
            With practical experience in Flutter, I have built cross-platform
            mobile applications that ensure a smooth and engaging user
            experience on both iOS and Android devices. My proficiency in Dart,
            along with my attention to detail in mobile design principles,
            allows me to create visually appealing and highly functional mobile
            apps.
            <br />
            <br />
            React.js:-
            <br />
            On the frontend, I have utilized React.js to develop dynamic and
            responsive web applications. My projects have involved creating
            interactive user interfaces, managing application state effectively,
            and employing modern JavaScript practices to enhance user
            experiences.
            <br />
            <br />
            Git & GitHub:-
            <br />
            I am well-versed in using Git for version control and have a solid
            understanding of collaborative workflows on GitHub. This includes
            branching, merging, pull requests, and managing repositories, which
            ensures efficient and organized development processes.
            <br />
            <br />
            Throughout my career, I have been committed to continuous learning
            and adapting to new technologies. I am passionate about
            problem-solving, collaborating with teams, and delivering
            high-quality software solutions. My goal is to leverage my skills
            and experience to contribute to innovative projects and drive
            technological advancements.
            <br />
            <br />
            Feel free to reach out to discuss potential opportunities,
            collaborations, or any interesting projects in the realm of software
            development!
          </p>
          <button id="btn">Download CV</button>
        </div>
      </div>
    
    </div>
  );
}

export default About;
