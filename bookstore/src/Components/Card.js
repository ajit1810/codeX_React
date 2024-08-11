import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bookImage from '../assets/download.jpeg';
import { Button } from '@mui/material';
import axios from 'axios';

export default function ImgMediaCard({ book }) {
  // console.log(book.id);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/deleteBook/${book.id}`)  
      .then(res => {  
        console.log(res.data);   
      })  
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <img src={bookImage} alt={book.name} />
        <Typography gutterBottom variant="h5" component="div">
          {book.name}
        </Typography>
        <Button onClick={handleDelete} size="small" color="primary">
          Share
        </Button>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
      </CardContent>
      
    </Card>
  );
}


