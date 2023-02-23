import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <Box>
            <AppBar elevation={0} style={{backgroundColor:'#ffeadf',}}  position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography style={{marginLeft:'3%'}} color="black" variant="h6"  sx={{ flexGrow: 0.1 }}>
                    تواصل معنا
                    </Typography>
                    <Typography  color="black" variant="h6" sx={{ flexGrow: 0.1 }}>
                    اختبار الأنماط
                    </Typography>
                    <Typography color="black"  variant="h6" sx={{ flexGrow: 0.1 }}>
                    الدخول للبوابة
                    </Typography>
                    <Typography  color="black" variant="h6"  sx={{ flexGrow: 0.6 }}>
                    عن علم
                    </Typography>
                    <Typography fontSize='48px' color="black">علم</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}