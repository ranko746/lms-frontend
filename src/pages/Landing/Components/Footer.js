import { Image, Instagram, Twitter } from '@mui/icons-material'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import {grey } from '@mui/material/colors';

const Footer = () => {
    return (
        <Box>
        <AppBar elevation={0} style={{backgroundColor:'white', width:'100%'}}  position="static">
            <Toolbar>
                <Instagram style={{marginLeft:'auto'}} sx={{ color: grey[900], flexGrow: 0.01, }} fontSize="small"/>
                <Twitter  sx={{ color: grey[900], flexGrow: 0.03, }} fontSize="small"/>
                <Typography  color="black" variant="h6"  sx={{ flexGrow: 0.03,  }}>
                اكتشف نمط تعلّمك
                </Typography>
                <Typography fontSize='48px' color="black" sx={{ flexGrow: 0.05,  }}>علم</Typography>
            </Toolbar>
        </AppBar>
    </Box>
    )
}

export default Footer