import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/pic1.webp" alt="Photo profile" />;
}

function Intro() {
  return (
    <div>
      <h1>Name Person</h1>
      <p>
        In ut quam vitae odio lacinia tincidunt. Quisque id odio. Vivamus
        laoreet. Proin magna.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="#" color="yellow" />
      <Skill skill="JavaScript" emoji="#" color="blue" />
      <Skill skill="After Effect" emoji="#" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
