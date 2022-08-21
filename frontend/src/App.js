import data from "./data";


function App() {
  return (
    <div>
      <header>
        <a href="/">AratanoCommerce</a> 
      </header>
      <main>
       <h1>Productos</h1>
       
        <div className="products">
        {data.products.map(product => (
        <div className="product" key={product._id}>
            
            <img src={product.image} alt={product.name} />
            
            <div className="product-info">
              <p>
                {product.name}
              </p>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
        </div>))
       } 
       </div>
      </main>
    </div>

  );
}

export default App;
