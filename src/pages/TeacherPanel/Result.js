import React, { useState } from 'react'
import { Box, Button, List, Typography, Dialog, DialogContent } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ListItem from '@mui/material/ListItem';
import layer1 from '../StudentPanel/images/Layer 1.png'
import clock from '../StudentPanel/images/clock.png'
import n01 from './imagesTeacherPanel/1.png'
import n02 from './imagesTeacherPanel/2.png'
import n03 from './imagesTeacherPanel/3.png'
import label1 from './imagesTeacherPanel/Label1.png'
import label2 from './imagesTeacherPanel/Label2.png'
import label3 from './imagesTeacherPanel/Label3.png'

const data = [
  {
    heading: "اختبار: حالات المادة - تفاعل الفلزات",
    time: "3:00",
    desc: " في هذا الدرس المصور ستتعلم المزيد عن حالات المادة وتحديدًا الحالات التي تتفاعل فيها الفلزات مع بعضها، بالإضافة إلى كيفية تفاعلها مع بقية المواد"
  },
  {
    heading: "اختبار: حالات المادة - تفاعل الفلزات",
    time: "3:00",
    desc: " في هذا الدرس المصور ستتعلم المزيد عن حالات المادة وتحديدًا الحالات التي تتفاعل فيها الفلزات مع بعضها، بالإضافة إلى كيفية تفاعلها مع بقية المواد"
  },

];

export default function Result() {
  const [open, setOpen] = useState(true);
  const [btn1, setbtn1] = useState(false)
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
            '&:hover, &:focus': { '& svg': { opacity: 1 } },
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

                <ListItemButton sx={{ textAlign: "right" }} onClick={() => setbtn1(!btn1)} >
                  <ListItemIcon sx={{ paddingLeft: "15px" }}>
                    {index === 0
                      ?
                      <img src={layer1} alt="doc" style={{ borderRadius: "20px" }} />
                      :
                      <img src={layer1} alt="doc" style={{ borderRadius: "20px" }} />

                    }
                  </ListItemIcon>
                  <ListItemText key={item} sx={{ paddingRight: "auto" }}>
                    <h3 >{item.heading}</h3>
                    <Box sx={{ flexDirection: "row", display: "flex" }}>
                      <img src={clock} alt="clock" style={{ paddingLeft: "10px", width: "30px" }} />
                      <Typography>{item.time}</Typography>
                    </Box>
                    <Typography sx={{ marginTop: "10px" }}>
                      {item.desc}
                    </Typography>
                  </ListItemText>


                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Box>

      <Dialog
        sx={{ m: 0, p: 0, w: 40 }}
        open={btn1}
        onClose={() => setbtn1(!btn1)}
        closeAfterTransition
        style={{ cursor: 'pointer' }}

      >
        <DialogContent
          style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '350px' }}
          sx={{ p: 2 }}>
          <Typography fontSize='40px' variant='h6' color="black" style={{ marginTop: '10px', fontWeight: "600" }}>
            نتائج الاختبار
          </Typography>
          <div dir='rtl' style={{ textAlign: 'right',marginTop:"18%", }}>
            <div
              style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center", alignItems: "center" ,marginBottom:"10px"}}
            >
              <img src={n01} alt="no1"  style={{marginLeft:"5px"}}/>
              <Typography>
                حسام عمر
              </Typography>
              <img src={label1} alt="score1" style={{marginRight:"150px"}} />
            </div>

            <div
              style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center", alignItems: "center",marginBottom:"10px" }}
            >
              <img src={n02} alt="no2"  style={{marginLeft:"20px"}}/>
              <Typography >
              خالد عبدالسلام     
                       </Typography>
              <img src={label2} alt="score2"  style={{marginRight:"150px"}}/>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}
            >
              <img src={n03} alt="no3"  style={{marginLeft:"5px"}}/>
              <Typography>
              توفيق جمال
              </Typography>
              <img src={label3} alt="score3" style={{marginRight:"150px"}}/>
            </div>

          </div>
          <Button style={{
            marginTop: '12%',
            backgroundColor: '#ff6d91',
            borderRadius: 10,
            width: 150,
            height: 55,
            fontSize: '21px',
            float: "center",
            textAlign: "center",


          }}
            variant="contained"
          >
            إغلاق
          </Button>
        </DialogContent>

      </Dialog>
    </>

  )
}
