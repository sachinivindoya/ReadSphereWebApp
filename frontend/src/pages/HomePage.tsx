import axios from "axios";
import { useEffect, useReducer } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { sampleBooks } from "../data";
import { ApiError } from "../types/ApiError";
import { Books } from "../types/Books";
import { getError } from "../utils";

type State = {
  products: Books[];
  loading: boolean;
  error: string;
};

type Action =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: Books[];
    }
  | { type: "FETCH_FAIL"; payload: string };

const initialState: State = {
  products: [],
  loading: true,
  error: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function HomePage() {

  const [{ loading, error, products }, dispatch] = useReducer<
  React.Reducer<State, Action>
>(reducer, initialState)
  
useEffect(() => {
  const fetchData = async () => {
    dispatch({ type: 'FETCH_REQUEST' })
    try {
      const result = await axios.get('/api/products')
      dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
    } catch (err) {
      dispatch({ type: 'FETCH_FAIL', payload: getError(err as ApiError) })
    }
  }
  fetchData()
 }, [])

 return loading ? (
  <LoadingBox />
) : error ? (
  <MessageBox variant="danger">{error}</MessageBox>
) : (
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
