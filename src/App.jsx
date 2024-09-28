/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./styles.css";
import profileImage from "./assets/testimonial.jpeg";

const skillsData = [
  {
    skill: "HTML",
    level: "Expert",
    color: "#c42a12",
  },
  {
    skill: "CSS",
    level: "Advanced",
    color: "#a87b11",
  },
  {
    skill: "JavaScript",
    level: "Beginner",
    color: "#d5e619",
  },
  {
    skill: "React",
    level: "Noob",
    color: "#159bc0",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div>
        <Intro />
        <SkillList></SkillList>
      </div>
    </div>
  );
}

function Avatar() {
  return <img src={profileImage} alt="Profile img" className="profile" />;
}

function Intro() {
  return (
    <div>
      <h2 className="name">Pier Gauton</h2>
      <p className="description">
        Phasellus blandit leo ut odio. Etiam sollicitudin, ipsum eu pulvinar
        rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet
        eros. Nullam vel sem. Praesent adipiscing. Praesent nonummy mi in odio.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skillList">
      {skillsData.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div style={{ backgroundColor: color }} className="skill">
      <span>{skill}</span>
      <span>
        {level === "Noob" && " 👶"}
        {level === "Beginner" && " 👌"}
        {level === "Advanced" && " 👍"}
        {level === "Expert" && " 🥇"}
      </span>
    </div>
  );
}

export default App;
