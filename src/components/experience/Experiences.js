import './Experiences.css'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import vanguard from "../../assets/img/vanguard-logo.jpeg";
import mtb from "../../assets/img/M&TBank.jpg";
import ritcs from "../../assets/img/computing-departments-jumbotron.jpg";
import tufts from "../../assets/img/tuftsposter.png";
import Ratio from 'react-bootstrap/Ratio'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const experienceData = [
    {
      'src': vanguard,
      'alt': 'Vanguard, an investment firm, logo',
      'title': "Cloud Engineer Co-op · Vanguard",
      'text1': "I had the opportunity to work on a platform team as a Cloud Engineer in Vanguard. I worked with multiple AWS Services, deployed feature requests, and am currently developing a Python library for internal usage.",
      'url': "https://investor.vanguard.com/corporate-portal"
    },
    {
      'src': mtb,
      'alt': 'M and T Bank logo. Subtext saying Understanding what is important',
      'title': "Software Engineer Intern · M&T Bank",
      'text1': "At M&T Bank, another intern and I worked on building an internal Full Stack application from scratch using Spring Boot, Angular, and SQL. I worked mostly on the authentication and back end services.",
      'url': "https://www3.mtb.com/careers/technology-internship-program"
    },
    {
      'src': ritcs,
      'alt': 'Computer Science Department building',
      'title': "CS Homework Grader · RIT",
      'text1': "I prepared weekly Python scripts and grading scales to automate the grading of 47 students’ homework assignments while boosting my ability to give effective and detailed feedback and ability to explain technical concepts.",
      'url': "https://www.rit.edu/computing/department-computer-science"
    },
    {
      'src': tufts,
      'alt': 'Research poster titled Structural and Thermal Properties of Polyampholytes',
      'title': "Computational Physicist Research Intern · Tufts University",
      'text1': "Worked within a team of 5 developers and 8 polymer researchers to simulate the wetting phenomena through a replicated contact angle experiment by developing a shape optimization program. Presented our findings.",
      'url': "https://sites.tufts.edu/softmattertheory/"
    }
  ]

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="experience-bx wow zoomIn">
              <h2>Experiences</h2>
              <p>here are some of my experiences<br></br>feel free to reach out with any questions :)</p>

              <Row xs={1} md={2} className="g-4">
                {experienceData.map((experience, idx) => (
                  <Col key={idx}>
                    <a href={experience.url} target="_blank" rel="noopener noreferrer" className="card-link">
                    <Card bg='dark'
                      text='dark'
                      style={{cursor: "pointer"}}
                      className="bg-dark text-white">
                      <Ratio aspectRatio={9 / 16}>
                        <Card.Img variant="top"
                          src={experience.src}
                          alt={experience.alt} />
                      </Ratio>
                      <Card.Body>
                        <Card.Title>{experience.title}</Card.Title>
                        <Card.Text>
                          {experience.text1}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    </a>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
