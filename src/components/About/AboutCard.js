import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Mohammad Hayat </span>
            from <span className="purple"> Srinagar, India.</span>
            <br /> I'm a dedicated front-end web developer with a passion for
            turning ideas into captivating and functional web experiences. With
            a keen eye for detail and a deep appreciation for user-centric
            design, I thrive on the ever-evolving challenges of the web
            development world.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
            </li>
            <li className="about-activity">
              <ImPointRight />
            </li>
            <li className="about-activity">
              <ImPointRight />
            </li>
          </ul>

          <h3 style={{ color: "rgb(155 0 0)" }}>
            "Strive to build things that make a difference!"{" "}
          </h3>
          <footer className="blockquote-footer">Hayat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
