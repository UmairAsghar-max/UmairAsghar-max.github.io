import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Umair Asghar </span>
            from <span className="purple"> Faisalabad, Pakistan.</span>
            <br />
            Electrical engineering graduate with over 2 years of hands-on experience in embedded systems and DevOps. Currently employed as an embedded systems software developer at <span className="purple"> EPTeck GmbH </span>, focusing on embedded Linux development
            and process automation.
            <br />
            I have completed Bachelor of Science in Electrical Engineering from Pakistan Institute of Engineering and Applied Sciences (PIEAS).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Umair</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
