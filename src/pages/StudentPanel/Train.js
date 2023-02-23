import React, { useState } from 'react'
import Box from '@mui/material/Box';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { List, Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import layer1 from '../StudentPanel/images/Layer 1.png'
import clock from '../StudentPanel/images/clock.png'
const data = [
  {
    heading: 'تمرين: حالات المادة: تفاعل الفلزات ',
    time: "3:00",
    desc: " في هذا الدرس المصور ستتعلم المزيد عن حالات المادة وتحديدًا الحالات التي تتفاعل فيها الفلزات مع بعضها، بالإضافة إلى كيفية تفاعلها مع بقية المواد"
  },
  {
    heading: 'تمرين: حالات المادة: تفاعل الفلزات ',
    time: "3:00",
    desc: " في هذا الدرس المصور ستتعلم المزيد عن حالات المادة وتحديدًا الحالات التي تتفاعل فيها الفلزات مع بعضها، بالإضافة إلى كيفية تفاعلها مع بقية المواد"
  },

];


export default function Train() {
  const [open, setOpen] = useState(true);
  const [listOpen, setListOpen]=useState(true)
  return (
    <>
      <Box dir="rtl"
        sx={{
          width: "737px",
          height: "70px",
      pb: open ? 2 : 0,
      margin: "0 auto",
      alignContent: 'center',
      justifyContent: 'center'
        }}

      >
      <ListItemButton

        alignItems="flex-start"
        onClick={() => setOpen(!open)}
        sx={{
          px: 3,
          pt: 2.5,
          pb: open ? 2 : 2.5,
          borderRadius: "10px",
          backgroundColor: "#fafafa",
          '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
        }}
      >
        <ListItemText
          primary="فيزياء 3"
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 700,
            lineHeight: '20px',
            mb: '2px',
          }}

          sx={{ my: 0, textAlign: "right" }}
        />
        <KeyboardArrowDown
          sx={{
            mr: -1,
            opacity: 0,
            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '0.2s',
          }}
        />
      </ListItemButton>

      <List dir="rtl" >
        {open &&
          data.map((item, index) => (
            <ListItem >

              <ListItemButton sx={{ textAlign: "right" }}>
                <ListItemIcon sx={{paddingLeft:"15px"}}>
                  {index === 0
                    ? 
                    <img src={layer1} alt="doc" style={{borderRadius:"20px"}} />
                     : 
                    <img src={layer1} alt="doc" style={{borderRadius:"20px"}} />
                    
                  }
                </ListItemIcon>
                <ListItemText key={item} sx={{paddingRight:"auto" }}>
                  <h3 >{item.heading}</h3>
                  <Box sx={{ flexDirection: "row", display: "flex" }}>
                    <img src={clock} alt="clock" style={{ paddingLeft: "10px", width: "30px"}} />
                    <Typography>{item.time}</Typography>
                  </Box>
                  <Typography sx={{marginTop:"10px"}}>
                    {item.desc}
                  </Typography>
                </ListItemText>


              </ListItemButton>
            </ListItem>
          ))}
      </List>


   
    </Box>
    <Box dir="rtl"
        sx={{
          width: "737px",
          height: "70px",
      pb: listOpen ? 2 : 0,
      margin: "40% auto",
      alignContent: 'center',
      justifyContent: 'center'
        }}

      >
      <ListItemButton

        alignItems="flex-start"
        onClick={() => setListOpen(!listOpen)}
        sx={{
          px: 3,
          pt: 2.5,
          pb: listOpen ? 2 : 2.5,
          borderRadius: "10px",
          backgroundColor: "#fafafa",
          '&:hover, &:focus': { '& svg': { opacity: listOpen ? 1 : 0 } },
        }}
      >
        <ListItemText
          primary="كيمياء 3"
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 700,
            lineHeight: '20px',
            mb: '2px',
          }}

          sx={{ my: 0, textAlign: "right" }}
        />
        <KeyboardArrowDown
          sx={{
            mr: -1,
            opacity: 0,
            transform: listOpen ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '0.2s',
          }}
        />
      </ListItemButton>

      <List dir="rtl" >
        {listOpen &&
          data.map((item, index) => (
            <ListItem >

              <ListItemButton sx={{ textAlign: "right" }}>
                <ListItemIcon sx={{paddingLeft:"15px"}}>
                  {index === 0
                    ? 
                    <img src={layer1} alt="doc" style={{borderRadius:"20px"}} />
                     : 
                    <img src={layer1} alt="doc" style={{borderRadius:"20px"}} />
                    
                  }
                </ListItemIcon>
                <ListItemText key={item} sx={{paddingRight:"auto" }}>
                  <h3 >{item.heading}</h3>
                  <Box sx={{ flexDirection: "row", display: "flex" }}>
                    <img src={clock} alt="clock" style={{ paddingLeft: "10px", width: "30px"}} />
                    <Typography>{item.time}</Typography>
                  </Box>
                  <Typography sx={{marginTop:"10px"}}>
                    {item.desc}
                  </Typography>
                </ListItemText>


              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
    
    </>
  )
}
