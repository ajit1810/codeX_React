import axios from "axios";
import { useEffect, useState } from "react";


function Booklist(){
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        const fetchBooks =async()=>{

            try {
                const response = await axios.get('https://localhost:8080/getAllBook');
                setBooks(response.data);
            } catch (error) {
                console.error('There was error fetching the books ',error);
            }
        }
        fetchBooks();
    },[]);
    return (
        <div>
            <h1>Books List</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.name} by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Booklist;