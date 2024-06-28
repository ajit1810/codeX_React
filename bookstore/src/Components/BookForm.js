
import "./BookForm.css";
import banner from "../assets/Banner.jpg";
// import { Route, Routes } from "react-router-dom";
import axios from "axios";

import { useState } from "react";
// import Booklist from "./Booklist";


function BookForm () {

  const url = "http://localhost:8080/addBook";
  const [books, setBooks] = useState({
    name: "",
    author: ""
  });

  const [msg,setMsg] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: books.name,
        author: books.author
      })
      .then((response) => {
        console.log(response.books);
        setMsg("Book added Sucessfully");
        setBooks({
          name: "",
          author: ""
        })
      });
  }

  function handleChange(e) {
    const newData = { ...books };
    newData[e.target.id] = e.target.value;
    setBooks(newData);
    console.log(newData);
  }

  return (
    <div>
      <div className="bookForm">
        <div className="banner">
          <img src={banner} />
        </div>
        <div>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            {/* book name */}
            <div>
              <label>Book Name</label>
              <br />
              <input 
              type="text" 
              name="name" 
              onChange={(e) => handleChange(e)}
              id="name"
              value={books.name}/>
            </div>
            {/* author */}
            <div>
              <label>Author Name</label>
              <br />
              <input 
              type="text" 
              name="author" 
              onChange={(e) => handleChange(e)}
              id="author"
              value={books.author}/>
            </div>

            {/* button for submit */}
            <button type="submit" id="btn" >
              Submit
            </button>
          </form>
          {
              msg && <h4>{msg}</h4>
            }
        </div>
       
      </div>
    </div>
  );

};

export default BookForm;
