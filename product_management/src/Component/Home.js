
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Home.css';
function Home ()  {
   const [productList,setProductList]=useState([]);

useEffect(() => {
  axios
    .get("http://localhost:8080/getAllProduct")
    .then((response) => {
      setProductList(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);



const handleDelete=(id)=>{
  console.log(id);
  axios.delete('http://localhost:8080/deleteProduct')
  .then((response)=>{
    setProductList(response.data);
    console.log(response.data);
  }) .catch((error) => {
    console.log(error);
  });
}



    return (
    <div className="p-4">




    <table className="table table-bordered" style={{border:1 }}>
  <thead className="custom-header">
    <tr >
      <th scope="col">no</th>
      <th scope="col">Product_Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody className="product-data">
  {productList.map((product) => (
            <tr key={product.id} >
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.status}</td>
              <td>

               <button class='btn btn-warning btn-sm edit'>Edit</button>
               <button class='btn btn-danger btn-sm  delete' onClick={()=>handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
     
  </tbody>
</table>

    </div>

  );
};

export default Home;
