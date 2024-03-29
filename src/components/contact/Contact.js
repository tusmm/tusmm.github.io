import './Contact.css'

import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__bounceIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounceIn" : ""}>
                <h2>Get In Touch</h2>
                <form action="https://formsubmit.co/rto9185@rit.edu" method="POST">
                  <input type="hidden" name="_subject" value="New submission!"/>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Name" name="name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" name="email" required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" type="text" placeholder="Message" name="message" required></textarea>
                      <button type="submit">Send</button>
                    </Col>
                  </Row>
                </form>

                <a class="-m-2 flex rounded-md p-2 text-neutral-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:text-white" href="mailto:rto9185@rit.edu" target="_blank">
                  <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span class="ml-3 text-sm sm:text-base">rto9185@rit.edu</span>
                </a>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
