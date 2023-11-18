import './Projects.css'

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import qwerkey from "../../assets/img/qwerkey.png";
import hitstofits from "../../assets/img/hits-to-fits.png";
import lovefirstbite from "../../assets/img/love-at-first-bite.png";
import hoppers from "../../assets/img/hoppers.png";
import wallscraper from "../../assets/img/wall-scraper.jpg";

import symptomtracker from "../../assets/img/symptom-tracker.jpg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Qwerkey",
      description: "I worked in a group of five to develop a full stack application for a semester long project. Utilizing Git, Spring Boot, Angular, and an Agile methodology, we were created a Keyboard E-Commerce store that ultimately won first amongst 40 other students.",
      imgUrl: qwerkey,
      projUrl: "https://qwerkey-test.netlify.app/login"
    },
    {
      title: "Hits2Fits",
      description: "Used Spotify API, Google Cloud, Flask, Git, and a machine learning model to develop an outfit recommender based on an inputted song. I developed this in a team of 4 for a university hackation. I worked mainly on the backend logic and connectivity.",
      imgUrl: hitstofits,
      projUrl: "https://devpost.com/software/hits-to-fits"
    },
    {
      title: "Love @ First Bite",
      description: "In a team of 4, my team and I developed a mobile app using React Native and Firebase for a hackathon which won Best UI/UX! Our goal was to match local, minority restaurants to users in a dating-app like fashion. I worked mostly on the backend and some front end screen components.",
      imgUrl: lovefirstbite,
      projUrl: "https://devpost.com/software/love-first-bite"
    },
    {
      title: "Wallscraper",
      description: "I developed this Python script to scrape wallpapers off a site. I used requests and Beautiful Soup Python libraries for this project. I built a user friendly command line interface with a search command for custom searches.",
      imgUrl: wallscraper,
      projUrl: "https://github.com/tusmm/wallscraper"
    },
    {
      title: "Hoppers (Academic)",
      description: "For an academic project, I recreated the puzzle board game, 'Hoppers', using JavaFX and Java following the Model-View-Controller structure. This application had a restart button, undo button, as well as a hint button. I implemented a BFS solver to make hints possible.",
      imgUrl: hoppers,
      projUrl: "https://www.thinkfun.com/products/hoppers/"
    },
    {
      title: "Symptom Tracker",
      description: "Developed a Java application with a partner for individuals to enter and track their symptoms while graphing the severity of the symptoms to give users a visual of their illness. This project won 2nd place in the 'Health' category.",
      imgUrl: symptomtracker,
      projUrl: "https://devpost.com/software/illness-tracker"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" 
                       className="nav-pills mb-5 justify-content-center align-items-center" 
                       id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">About</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I hope to use projects to both learn and contribute while doing. I'm going to be looking for and working on some cool projects, so stay tuned &#128526;</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
