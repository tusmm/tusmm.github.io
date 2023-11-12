import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import vanguard from "../assets/img/vanguard-logo.jpeg";

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
      'alt': 'Card image',
      'title': "Cloud Engineer Co-op",
      'text1': "vanguard test",
      'url': ""
    },
    {
      'src': meter1,
      'alt': 'Card image',
      'title': "Cloud Engineer Co-op",
      'text1': "vanguard test",
      'url': ""
    },
    {
      'src': vanguard,
      'alt': 'Card image',
      'title': "Cloud Engineer Co-op",
      'text1': "vanguard test",
      'url': ""
    },
    {
      'src': vanguard,
      'alt': 'Card image',
      'title': "Cloud Engineer Co-op",
      'text1': "vanguard test",
      'url': ""
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
                    <Card bg='dark'
                          text='dark'
                          style={{}}
                          className="bg-dark text-white">
                      <Card.Img variant="top" 
                                src={experience.src}
                                alt={experience.alt} />
                      <Card.Body>
                        <Card.Title>{experience.title}</Card.Title>
                        <Card.Text>
                        {experience.text1}
                        </Card.Text>
                      </Card.Body>
                    </Card>
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
