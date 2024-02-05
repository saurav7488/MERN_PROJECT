import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom'
const Header = () => {
     const [value,setValue] = useState(0);
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography>
                    <LibraryBooksIcon />
                </Typography>       
                <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e
                ,val)=>setValue(val)} >
                      <Tab LinkComponent={NavLink} to="/add" label='Add Product'/>
                      <Tab LinkComponent={NavLink} to="/books" label='Books' />
                      <Tab  LinkComponent={NavLink} to="/aboutus" label='About Us' />
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Header

