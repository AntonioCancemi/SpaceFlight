import ListGroup from "react-bootstrap/ListGroup";
import { Article } from "./interfaces/interfaces";
import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";
import { Card, CardGroup, Row } from "react-bootstrap";

const ArticleList = () => {
  const endPoint = "https://api.spaceflightnewsapi.net/v3/articles";
  const [arrArticle, setArrArticle] = useState<Article[]>([]);

  const getAllarticles = async (endPoint: string) => {
    try {
      let res = await fetch(endPoint);
      if (res.ok) {
        let data = await res.json();
        setArrArticle(data);
      } else {
        alert("response NOT ok");
      }
    } catch (error) {
      alert("errore nella fetch getAllarticles");
    }
  };

  useEffect(() => {
    getAllarticles(endPoint);
    console.log(arrArticle);
  }, []);
  return (
    <Row xs={1} md={2} className="g-4">
      {arrArticle.map((article, index) => {
        return <SingleArticle key={index} article={article}></SingleArticle>;
      })}
    </Row>
  );
};
export default ArticleList;
