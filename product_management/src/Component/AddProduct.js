import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const url = "http://localhost:8080/saveProduct";
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const [msg,setMsg] = useState('')

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        productName: product.productName,
        description: product.description,
        price: product.price,
        status: product.status,
      })
      .then((response) => {
        console.log(response.product);
        setMsg("Product added Sucessfully");
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: "",
        })
      });
  }

  function handle(e) {
    const newData = { ...product };
    newData[e.target.id] = e.target.value;
    setProduct(newData);
    console.log(newData);
  }

  return (
    <div className="container mt-3">
      <div className="row-nd-6 offset-nd-3">
        <div className="col-nd-6 offset-nd-3">
          <div className="card">
            <div className="card-header fs-3 text-center">Add Product</div>
            {
                msg && 
                <p className="fs-4 text-center text-success">{msg}</p>
            }
            <div className="card-body">
              <form onSubmit={(e) => submit(e)} className="mt-3">
                <div className="nb-3">
                  <label>Enter Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    className="form-control"
                    onChange={(e) => handle(e)}
                    id="productName"
                    value={product.productName}
                  />
                </div>
                <div className="nb-3">
                  <label>Enter Discription</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={(e) => handle(e)}
                    id="description"
                    value={product.description}
                  />
                </div>
                <div className="nb-3">
                  <label>Enter Price</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    onChange={(e) => handle(e)}
                    id="price"
                    value={product.price}
                  />
                </div>
                <div className="nb-3">
                  <label>Enter Status</label>
                  <input
                    type="text"
                    name="status"
                    className="form-control"
                    onChange={(e) => handle(e)}
                    id="status"
                    value={product.status}
                  />
                </div>

                <button className="btn btn-primary col-md-12 mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
