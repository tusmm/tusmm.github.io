import './Experiences.css'

import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import vanguard from "../../assets/img/vanguard-logo.jpeg";
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
      'alt': 'Image of Vanguard',
      'title': "Cloud Engineer Co-op · Vanguard",
      'text1': "I had the opportunity to work on a platform team as a Cloud Engineer in Vanguard. I worked with multiple AWS Services, deployed feature requests, and am currently developing a Python library for internal usage.",
      'url': "https://investor.vanguard.com/corporate-portal"
    },
    {
      'src': meter1,
      'alt': 'Card image',
      'title': "Software Engineer Intern · M&T Bank",
      'text1': "At M&T Bank, another intern and I worked on building an internal Full Stack application from scratch using Spring Boot, Angular, and SQL. I worked mostly on the authentication and back end services.",
      'url': "https://www3.mtb.com/careers/technology-internship-program"
    },
    {
      'src': vanguard,
      'alt': 'Card image',
      'title': "CS Homework Grader · RIT",
      'text1': "I prepared weekly Python scripts and grading scales to automate the grading of 47 students’ homework assignments while boosting my ability to give effective and detailed feedback and ability to explain technical concepts.",
      'url': "https://www.rit.edu/computing/department-computer-science"
    },
    {
      'src': vanguard,
      'alt': 'Card image',
      'title': "Computational Physicist Research Intern · Tufts University",
      'text1': "Worked within a team of 5 developers and 8 polymer researchers to simulate the wetting phenomena through a replicated contact angle experiment by developing a shape optimization program.",
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
                    <a href={experience.url} className="card-link">
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
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
