import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import data from "../data";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";



function HomeScreen (){
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);
    return <div>
        <Helmet>
        <title>Templ.</title>
      </Helmet>
       <h1 style={{fontSize:"1.5rem"}}>Productos Destacados</h1>
        <div className="products">
          <Row>
          {products.map((product) => (
            <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
        </div>
    </div>;
}
export default HomeScreen;