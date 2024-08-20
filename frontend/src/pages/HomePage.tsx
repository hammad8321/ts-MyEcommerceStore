import React, { useEffect, useReducer } from "react";
import { Col, Row } from "react-bootstrap";
import { sampleProducts } from "../data";
import { Link } from "react-router-dom";
import { Product } from "../types/Product";
import axios from "axios";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

type State = {
  product: Product[];
  loading: boolean;
  error: string;
};

type Action =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: Product[];
    }
  | { type: "FETCH_FAIL"; payload: string };

const initialState: State = {
  product: [],
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
};

export const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err as ApiError) });
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Row bg="primary" variant="dark" expand="lg">
        {sampleProducts.map((p, i) => (
          <Col key={i} sm={6} md={4} lg={3}>
            <Link to={"/product/" + p.slug}>
              <img src={p.image} alt={p.name} className="product-image" />
              <h2>{p.name}</h2>
              <p>${p.price}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};
