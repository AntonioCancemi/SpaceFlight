import { Article } from "./interfaces/interfaces";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

interface SingleArticleProps {
  article: Article;
  key: Number;
}
const SingleArticle = (props: SingleArticleProps) => {
  const a = props.article;
  return (
    <Col>
      <Card className="slide-in-left h-100">
        <Card.Img variant="top" className="cardIMG" src={a.imageUrl} />
        <Card.Body>
          <Card.Title>{a.title}</Card.Title>

          <Card.Text className="text-center align-self-base">
            <Link to={"/detail/" + a.id} className="btn btn-outline-primary ">
              read more...
            </Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Published at: {a.publishedAt.slice(0, 10)}
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
};
export default SingleArticle;
