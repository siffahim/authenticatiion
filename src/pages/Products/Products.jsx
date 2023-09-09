import React, { useEffect, useState } from "react";

const Products = () => {
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const [products, setProducts] = useState();

  const handleProductSubmit = (e) => {
    e.preventDefault();

    if (!productCode || !productName || !productPrice) {
      alert("Please add product description");
      return;
    }

    const product = {
      code: productCode,
      name: productName,
      price: productPrice,
    };

    setProducts((prevProducts) => [...prevProducts, product]);

    setProductCode("");
    setProductName("");
    setProductPrice("");

    localStorage.setItem("products", JSON.stringify([...products, product]));
  };

  useEffect(() => {
    const getProductsString = localStorage.getItem("products");
    const getProduct = JSON.parse(getProductsString);
    setProducts(getProduct);
  }, []);

  return (
    <div className="container mx-auto text-center mb-48">
      <h1 className="text-4xl my-10 text-yellow-400 font-medium">
        Product Create to <span className="text-green-500">LocalStorage</span>
      </h1>
      <form onSubmit={handleProductSubmit}>
        <input
          type="text"
          placeholder="Product Code"
          className="input input-bordered input-primary w-full max-w-xs mx-2"
          onBlur={(e) => setProductCode(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Name"
          className="input input-bordered input-primary w-full max-w-xs"
          onBlur={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Price"
          className="input input-bordered input-primary w-full max-w-xs  mx-2"
          onBlur={(e) => setProductPrice(e.target.value)}
        />
        <button
          type="submit"
          className="btn bg-violet-500 text-white block w-2/4 mx-auto my-5"
        >
          Add Products
        </button>
      </form>
      <p className="text-2xl text-green-600 my-8">
        Load Products from LocalStorage
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-10">
        {products?.map((product) => (
          <div
            className="bg-violet-50 shadow-xl p-5 rounded-lg"
            key={product.code}
          >
            <div>
              <h2 className="text-xl">{product.name}</h2>
              <p className="text-lg my-2">${product.price}</p>
              <div>
                <button className="btn btn-link mt-2">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
