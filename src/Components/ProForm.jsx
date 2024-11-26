import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct1 } from "../Features/Products/ProSlice";
import ProductList from "./ProList";

function ProductForm() {
  let [product, setProduct] = useState({});
  let [updateId, setUpdateId] = useState("");

  const dispatch = useDispatch();

  let handleInput = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log(product);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);

    if (updateId === "") {
      dispatch(addProduct(product));
    } else {
      dispatch(updateProduct1(product));
      setUpdateId("");
    }
    setProduct({});
  };

  let updateProduct = (product) => {
    setProduct(product);
    setUpdateId(product.id);
  };
  return (
    <>
      <div className="container">
      <h4 className="text-center mt-4 text-primary fw-bold border-bottom pb-2">
  Add Your Product Here!
</h4>

     
        <form className="w-75 mx-auto mt-5 p-4 border rounded shadow bg-light" onSubmit={handleSubmit}>
  <h3 className="text-center text-primary mb-4">Add Product Details</h3>


  <div className="mb-3">
    <label className="form-label">
      <b>Name:</b>
    </label>
    <input
      type="text"
      className="form-control border-primary"
      name="title"
      placeholder="Enter product name"
      onChange={handleInput}
      value={product.title || ""}
      required
    />
  </div>

 
  <div className="mb-3">
    <label className="form-label">
      <b>Price:</b>
    </label>
    <input
      type="number"
      className="form-control border-primary"
      name="price"
      placeholder="Enter product price"
      onChange={handleInput}
      value={product.price || ""}
      required
    />
  </div>

 
  <div className="mb-3">
    <label className="form-label">
      <b>Image URL:</b>
    </label>
    <input
      type="url"
      className="form-control border-primary"
      name="image"
      placeholder="Enter image URL"
      onChange={handleInput}
      value={product.image || ""}
      required
    />
  </div>

 
  <div className="mb-3">
    <label className="form-label">
      <b>Product Category:</b>
    </label>
    <input
      type="text"
      className="form-control border-primary"
      name="category"
      placeholder="Enter product category"
      onChange={handleInput}
      value={product.category || ""}
      required
    />
  </div>

 
  <div className="text-center">
    <button type="submit" className="btn btn-primary px-5 py-2 rounded-pill shadow">
      Submit
    </button>
  </div>
</form>

        <ProductList updateProduct={updateProduct} />
      </div>
    </>
  );
}

export default ProductForm;
