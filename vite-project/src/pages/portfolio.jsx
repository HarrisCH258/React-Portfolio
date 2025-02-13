import React from "react";
import Content from "../components/Content.jsx";
import "../styles/portfolio.css";
const contents = [
    { title: "Weather Board", image: "/assets/weatherAPI.png", url:"https://github.com/HarrisCH258/Weather-Board" },
    { title: "Employee Tracker", image: "/assets/employeeTracker.png", url:"https://github.com/HarrisCH258/Challenge-10-SQL" },
    { title: "README Generator", image: "/assets/nodeReadme.png", url:" https://github.com/HarrisCH258/NodeJS-challenge" },
    { title: "Vacation Calculator", image: "/assets/vacaCalc.png", url:"https://github.com/HarrisCH258/Vacation-Budget-Calculator" },
    { title: "Vehicle Builder", image: "/assets/vehicle-Builder.png", url:"https://github.com/HarrisCH258/challenge-08" },
    { title: "React Portfolio", image: "/assets/react.png", url:"https://github.com/HarrisCH258/React-Portfolio/tree/main/vite-project" },
];
export default function Portfolio() {
    return (
        <div class='port'>
            <h1><strong>Portfolio</strong></h1>
            <div className="portfolio-container">
                {contents.map((project, index) => (
                    <Content key={index} title={project.title} image={project.image} url={project.url} />
                ))}
            </div>
        </div>
    );
};
