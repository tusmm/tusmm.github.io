import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projUrl} className="project-link">
        <div className="proj-imgbx" href={projUrl}>
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
