import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ImageList } from '@mui/material';
import door from '../imagesTeacherPanel/door-3.png';
import doubleArrow from '../imagesTeacherPanel/double-arrow-left.png'
import openbook from '../imagesTeacherPanel/open-book.png'
import powerlevel from '../imagesTeacherPanel/power-level.png'
import chart from '../imagesTeacherPanel/a-chart.png'
import instagram from '../imagesTeacherPanel/logo-instagram.png'
import twitter from '../imagesTeacherPanel/logo-twitter.png'
import TeacherCourses from '../TeacherCourses'
import TEacherQuizes from '../TEacherQuizes'
import Result from '../Result'
const drawerWidth = 240;
export default function DrawerComp() {
    const [menuData, setMenuData] = useState("Courses")
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                elevation={0}
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px`, backgroundColor: "white", color: "black" }}
            >
                <Toolbar>
                    <ImageList >
                        <img src={door} alt="door" />
                    </ImageList>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        تسجيل الخروج
                    </Typography>

                    <ImageList >
                        <img src={doubleArrow} alt="arrow" />
                    </ImageList>
                    <Typography>البوابة</Typography>
                </Toolbar>
                <Divider />
            </AppBar>

            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />

                {menuData === "Courses" && <TeacherCourses/>}
                {menuData === "Quizes" && <TEacherQuizes />}
                {menuData === "Result" && <Result />}

           
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="right"
            >
                <Typography sx={{ fontWeight: 700, paddingLeft: 3, paddingTop: 2, paddingBottom: 3, fontSize: 27, textAlign: "center" }}>علم</Typography>


                <List dir="rtl">
                    {[ 'المقررات', 'الاختبارات', 'النتائج'].map((text, index) => (
                        <ListItem key={text} onClick={() => setMenuData(index === 0 ? "Courses" : index === 1 ? "Quizes" : index === 2 ? "Result" : "Courses")}>
                            <ListItemButton sx={{ paddingRight: "auto", textAlign: "right" }}>
                                <ListItemIcon sx={{}}>
                                    {index === 0 ? <img src={openbook} alt="book" /> : index === 1 ? <img src={powerlevel} alt="power" /> : index === 2 ? <img src={chart} alt="power" /> : <img src={openbook} alt="book" />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Box
                    sx={{ textAlign: "center", marginTop: "auto" }}
                >
                    <Typography sx={{ fontSize: "19px", lineHeight: "40px", color: " #333333", fontWeight: 700 }} >علم</Typography>
                    <Typography sx={{ fontSize: "15px", lineHeight: "40px" }}>اكتشف نمط تعلّمك</Typography>
                    <Box sx={{ flexDirection: "row" }}>
                        <img src={instagram} alt="insta" style={{ marginRight: "10px", }} />
                        <img src={twitter} alt="tweet" />
                    </Box>
                </Box>

            </Drawer>
        </Box>
    )
}
