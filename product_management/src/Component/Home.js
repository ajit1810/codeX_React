
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Home ()  {
   const [productList,setProductList]=useState([]);

   useEffect(()=>{
        loadUsers();
   },[]);

   const loadUsers=async()=>{
    const response =await axios.get("http://localhost:8080/getAllProduct")
    setProductList(response.data);
}
    return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3 text-center">
                All Product List
            </div>
            <div className="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                        productList.map((product,index) =>{
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <th>{product.productName}</th>
                            <th>{product.description}</th>
                            <th>{product.price}</th>
                            <th>{product.status}</th>
                            <th>
                                <Link to="" className="btn btn-sm btn-primary">Edit</Link>
                                <Link to="" className="btn btn-sm btn-denger ms-1">Delete</Link>
                            </th>
                          </tr>
                        })
                    }
                
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
