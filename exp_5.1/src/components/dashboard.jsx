import React from "react";

const Dashboard = () => {
  const skills = [
    "React & Web Development",
    "Python Programming",
    "Machine Learning Basics",
    "UI/UX Design",
    "Problem Solving",
  ];

  const projects = [
    "AI-powered Rehabilitation Game",
    "Fruit Ninja Hand Tracking Game",
    "Vendor Mitra Web Platform",
  ];

  return (
    <div className="page" style={styles.page}>
      <h1>Dashboard</h1>

      <div style={styles.card}>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div style={styles.card}>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>

      <div style={styles.card}>
        <h2>Goals</h2>
        <p>
          To become a Metaverse developer and build AI-driven interactive systems.
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
};

export default Dashboard;