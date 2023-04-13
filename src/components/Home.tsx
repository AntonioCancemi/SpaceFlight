import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import MyNav from "./MyNav";

import ArticleList from "./ArticleList";
const Home = () => {
  return (
    <Container fluid>
      <Row>
        <MyNav></MyNav>
        <h1 className="fw-bold fs-1 text-center">NewS From SPACE</h1>
      </Row>
      <Row className="justify-content-center">
        <Col xs={8}>
          <ArticleList />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
