import React, { useState, useEffect } from "react";
import { useProductContext } from "../../api/product";

const DashTable = () => {
  const { getAllProducts, getProduct, createProduct, removeProduct } =
    useProductContext();
  let idCount = 0;
  function idIncreament() {
    return ++idCount;
  }
  const [products, setProducts] = useState(getAllProducts());
  const [newProduct, setNewProduct] = useState({
    id: idIncreament,
    Name: "",
    Description: "",
    Quantity: "",
    price: "",
    Category: "",
  });
  const [editedProduct, setEditedProduct] = useState(null);

  const handleDelete = (id) => {
    removeProduct(id);
    setProducts(getAllProducts());
  };

  const handelEdit = (id) => {
    const productEdit = getProduct(id);
    setEditedProduct(productEdit);
  };
  const handleEditChange = (event, field) => {
    const updatedProduct = { ...editedProduct, [field]: event.target.value };
    setEditedProduct(updatedProduct);
  };

  const handleAdd = () => {
    setNewProduct({
      id: idIncreament,
      Name: "",
      Description: "",
      Quantity: "",
      price: "",
      Category: "",
    });
    createProduct(newProduct);
    setProducts(getAllProducts());
  };

  return (
    <div className="container my-5">
      <table className="table table-dark border">
        <thead>
          <tr className="text-center table-active">
            <th scope="col">Product Image</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">price</th>
            <th scope="col">Category</th>
            <th scope="col">controllers</th>
          </tr>
        </thead>
        <tbody className="text-center border">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="align-middle bg-success">
                <img src={product.EmpImg} alt="product"></img>
              </td>
              <td className="align-middle">{product.Name}</td>
              <td className="align-middle">{product.Description}</td>
              <td className="align-middle">{product.Quantity}</td>
              <td className="align-middle">{product.price}</td>
              <td className="align-middle">{product.Category}</td>
              <td className="align-middle">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(product.id);
                    console.log(product.id);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning mx-2"
                  onClick={() => handelEdit(product.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan="10">
              <div className="div">
                <button
                  className="btn btn-success col-12"
                  onClick={() => handleAdd()}
                >
                  Add New Product
                </button>
              </div>
              <div className="mt-3">
                <form>
                  <div className="form-group row">
                    <input
                      type="text"
                      className="form-control m-2 col"
                      placeholder="Name"
                      value={newProduct.Name}
                      onChange={(e) => setNewProduct(e.target.allProucts.Name)}
                    />
                    <input
                      type="text"
                      className="form-control m-2 col"
                      placeholder="Description"
                      onChange={(e) => {}}
                    />
                    <input
                      type="text"
                      className="form-control m-2 col"
                      placeholder="Quantity"
                      onChange={(e) => {}}
                    />
                    <input
                      type="text"
                      className="form-control m-2 col"
                      placeholder="price"
                      onChange={(e) => {}}
                    />
                    <input
                      type="text"
                      className="form-control m-2 col"
                      placeholder="Category"
                      onChange={(e) => {}}
                    />
                  </div>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashTable;
