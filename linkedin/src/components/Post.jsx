import { Row, Col } from "react-bootstrap";
const Post = ({ id, email, name, surname, image, text, title, i }) => {
  return (
    <div className="bg-light rounded mt-2 p-2">
      <Row>
        <Col className="d-flex">
          <img
            src={image}
            style={{
              width: "42px",
              height: "42px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "0.5rem",
            }}
            className="mr-2"
          />
          <div>
            <p className="font-weight-bold text-smaller p-0 m-0">
              {name} {surname}
            </p>
            <p className="text-smaller"> {title}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p>{text}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <img src={"https://picsum.photos/100" + i} className="w-100" />
        </Col>
      </Row>
    </div>
  );
};
export default Post;
