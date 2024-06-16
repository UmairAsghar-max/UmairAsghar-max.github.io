import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
  DiLinux,
  DiTerminalBadge,
} from "react-icons/di";
import {
  SiConfluence,
  SiC,
  SiCplusplus,
  SiGnu,
  SiGitlab,
  SiGithub,
  SiGithubactions,
  SiJira,
  SiDocker,
  SiCmake,
  SiPython,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTerminalBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCmake />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiConfluence />
      </Col>
    </Row>
  );
}

export default Techstack;
