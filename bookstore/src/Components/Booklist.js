// import axios from "axios";
// import { useEffect, useState } from "react";
// import ImgMediaCard from './Card';
// import './Booklist.css';

// function Booklist() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/getAllBook")
//       .then((response) => {
//         setBooks(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

 

//   return (
//     <div>
//       <h2>Book List</h2>
//       <div className="cards" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px" }}>
//         {books.map((book) => (
//           <ImgMediaCard key={book.id} book={book}  />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Booklist;
