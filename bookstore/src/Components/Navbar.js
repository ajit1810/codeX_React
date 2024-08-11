// import React from 'react';
// import "./Navbar.css";
// import { Link } from 'react-router-dom';

// function Navbar() {
//     return(
//         <div className='navbar'>
//             <ul>
//                 <h1>Bookstore</h1>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="booklist">BookList</Link></li>
//             </ul>
//         </div>
//     );
// }

// export default Navbar;




import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow:1,px:10}}  >
                        BOOK KEEPING WEBSITE
                </Typography>
                <Box sx={{px:15,display: 'flex', gap: 5,display:{xs:'none',md:'flex'}}}>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>Book Add</Button>
                    <Button color='inherit'>Book Storage</Button>
                </Box>
                <Box sx={{display:{xs:'flex',md:'none'}}}>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar