import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { sampleBooks } from "./data";

function App() {
  return (
    <div>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand>ReadSphere</Navbar.Brand>
            </Container>
            <Nav>
              <a href="/cart" className="nav-link">
                Cart
              </a>
              <a href="/signin" className="nav-link">
                Sign In
              </a>
            </Nav>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Row>
              {sampleBooks.map((book) => (
                <Col key={book.slug} sm={6} md={4} lg={3}>
                  <img
                    src={book.image}
                    alt={book.name}
                    className="product-image max-w-[400px] w-full"
                  />
                  <h2>{book.name}</h2>
                  <p>${book.price}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
