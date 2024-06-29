import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sampleBooks } from "../data";

function HomePage() {
  return (
    <Row>
      {sampleBooks.map((book) => (
        <Col key={book.slug} sm={6} md={4} lg={3}>
          <Link to={"/book/" + book.slug}>
            <img
              src={book.image}
              alt={book.name}
              className="product-image max-w-[400px] w-full"
            />
            <h3>{book.name}</h3>
            <p>${book.price}</p>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default HomePage;
