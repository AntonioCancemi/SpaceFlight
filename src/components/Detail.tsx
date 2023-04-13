import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Article } from "./interfaces/interfaces";
import { Link, useParams } from "react-router-dom";
import MyNav from "./MyNav";

const Details = () => {
  const { id } = useParams();
  const endPoint = "https://api.spaceflightnewsapi.net/v3/articles/";
  const url = endPoint + id;
  const [singleArticle, setSingleArticle] = useState<Article | null>(null);
  useEffect(() => {
    getSingleArticle(url);
  }, []);
  const getSingleArticle = async (url: string) => {
    try {
      console.log(url);
      let res = await fetch(url);
      if (res.ok) {
        let data = await res.json();
        setSingleArticle(data);
      } else {
        alert("response NOT ok");
      }
    } catch (error) {
      alert("errore nella fetch getAllarticles");
    }
  };
  return (
    <Container fluid>
      <Row className="pb-5">
        <MyNav />
      </Row>
      {id ? (
        <Row className="justify-content-center slide-in-left">
          <Col xs={6}>
            <Card>
              <Card.Img
                variant="top"
                className="cardIMG"
                src={singleArticle?.imageUrl}
              />
              <Card.Body>
                <Card.Text>
                  <small className="text-muted">
                    From: {singleArticle?.newsSite}
                  </small>
                </Card.Text>
                <Card.Title>{singleArticle?.title}</Card.Title>
                <Card.Text>{singleArticle?.summary}</Card.Text>
                <Card.Text className="text-center">
                  <a
                    className="btn btn-outline-success"
                    href={singleArticle?.url}
                    target="blank"
                  >
                    vita il sito
                  </a>
                  {"  "}
                  <Link className="btn btn-outline-danger" to="/">
                    Back Home
                  </Link>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Published at: {singleArticle?.publishedAt.slice(0, 10)}
                </small>
                <br />
                <small className="text-muted">
                  Updated at: {singleArticle?.updatedAt.slice(0, 10)}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <h1>impossbile trovare l'articolo selezionato</h1>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default Details;
