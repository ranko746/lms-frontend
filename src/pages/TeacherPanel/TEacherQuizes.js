import React, { useState } from 'react'
import { Box, Button, List, Typography, Dialog, DialogContent, TextField, } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ListItem from '@mui/material/ListItem';
import layer1 from '../StudentPanel/images/Layer 1.png'
import clock from '../StudentPanel/images/clock.png'
import remove from './imagesTeacherPanel/i-remove.png'
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

export default function TEacherQuizes() {
  const [open, setOpen] = useState(true);
  const [btn1, setbtn1] = useState(false)
  const [btn2, setbtn2] = useState(false)
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

            sx={{ my: 0, textAlign: "right", marginTop: "8px" }}
          />
          <Button style={{
            backgroundColor: ' #ff4778',
            borderRadius: 15,
            width: 160,
            height: 40,
            alignItems: "center",
            marginLeft: "35px",
            fontSize: '21px',


          }}

            onClick={() => setbtn1(!btn1)}
            variant="contained"
          >
            إنشاء اختبار
          </Button>

          <KeyboardArrowDown
            sx={{
              mr: -1,
              opacity: 0,
              transform: open ? 'rotate(-180deg)' : 'rotate(0)',
              transition: '0.2s',
              marginTop: "8px"
            }}
          />

        </ListItemButton>

        <List dir="rtl" >
          {open &&
            data.map((item, index) => (
              <ListItem >

                <ListItemButton sx={{ textAlign: "right" }}>
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

        sx={{ m: 0, p: 0, w: 50 }}
        open={btn1}
        onClose={() => setbtn1(!btn1)}
        closeAfterTransition
        style={{ cursor: 'pointer' }}

      >
        <DialogContent
          style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '300px' }}
          sx={{ p: 2 }}>
          <Typography fontSize='40px' variant='h6' color="black" style={{ marginTop: '10px', fontWeight: "600" }}>
            إنشاء اختبار
          </Typography>
          <div dir='rtl' style={{ textAlign: 'right' }}>

            <Typography fontSize='15px' variant='h6' color="black">
              <Typography fontSize='15px' variant='h6' color="black" style={{ marginTop: '10px', marginBottom: '7px' }}>
                أهداف التعلم المرتبطة
              </Typography>
            </Typography>
            <TextField size="small" style={{ backgroundColor: 'white', border: '1px solid #ffbdcd', borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%", borderColor: '#ffbdcd' }} placeholder="   5 كيمياء  " />

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
            onClick={() => setbtn2(!btn2)}
            variant="contained"
          >
            التالي
          </Button>
        </DialogContent>

      </Dialog>


      <Dialog
        sx={{ m: 0, p: 0, w: 40 }}
        open={btn2}
        onClose={() => setbtn2(!btn2)}
        closeAfterTransition
        style={{ cursor: 'pointer' }}

      >
        <DialogContent
          style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '580px' }}
          sx={{ p: 2, borderRadius: "40px" }}>
          <Typography fontSize='40px' variant='h6' color="black" style={{ marginTop: '10px', marginBottom: '7px' }}>
            أسئلة الاختبار
          </Typography>
          <div style={{ flexDirection: "row", marginTop: "20px" }}>
            <Button style={{
              // marginTop: '12%',
              backgroundColor: '#ff6d91',
              borderRadius: 20,
              width: 190,
              height: 50,
              // padding:'30px',
              marginLeft: "90px",
              fontSize: '21px',
              // display:'block'
              float: "center",
              textAlign: "center",


            }}
              variant="contained"
            >
              إضافة سؤال جديد
            </Button>
            <Button 

            variant='outlined' 
            style={{ color: "black", borderColor: 'grey', marginLeft: "20px", borderRadius: "8px" }}
            >العودة
            <i class="fa fa-chevron-right" aria-hidden="true" style={{ color: "gray", marginLeft: '3px' }}></i></Button>

          </div>
          <div
            style={{ flexDirection: "row", display: "flex", justifyContent: "center", alignContent: "center", textAlign: "center", alignItems: "center", marginTop: "25px" }}
          >
            <img src={remove} alt="delete" style={{ marginLeft: "12px", marginRight: "8px" }} />
            <div style={{
              width: " 100px",
              height: "3px",
              borderRadius: "40px",
              marginRight: "16px",

              backgroundColor: '#ff6d91',
              border: "1px solid #e6e6e6"
            }} />
            <Typography sx={{ paddingRight: "20px" }}> 1 السؤال </Typography>
            <div style={{
              width: " 100px",
              height: "3px",
              borderRadius: "40px",
              marginRight: "12px",

              backgroundColor: '#ff6d91',
              border: "1px solid #e6e6e6"
            }} />
          </div>
          <div dir='rtl' style={{ textAlign: 'right' }}>
            <Typography fontSize='15px' variant='h6' color="black">
              <Typography fontSize='15px' variant='h6' color="black" style={{ marginTop: '18px', marginBottom: '7px' }}>
                عنوان السؤال
              </Typography>
            </Typography>
            <TextField size="small" style={{ backgroundColor: 'white', border: '1px solid #ffbdcd', borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%", borderColor: '#ffbdcd' }} placeholder='كم هو عدد حالات المادة؟' />

            <Typography fontSize='15px' variant='h6' color="black">
              <Typography fontSize='15px' variant='h6' color="black" style={{ marginTop: '20px', marginBottom: '7px' }}>
                الكلمات المفتاحية للسؤال
              </Typography>
            </Typography>
            <TextField size="small" style={{ backgroundColor: 'white', border: '1px solid #ffbdcd', borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%", borderColor: '#ffbdcd' }} placeholder='حالات، المادة' />

            <Typography fontSize='15px' variant='h6' color="black">
              <Typography fontSize='15px' variant='h6' color="black" style={{ marginTop: '20px', marginBottom: '7px' }}>
                الجواب الصحيح
              </Typography>
            </Typography>
            <TextField size="small" style={{ backgroundColor: 'white', border: '1px solid #ffbdcd', borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%", borderColor: '#ffbdcd' }} placeholder='4' />

            <Typography fontSize='15px' variant='h6' color="black">
              <Typography fontSize='15px' variant='h6' color="black" style={{ marginTop: '20px', marginBottom: '7px' }}>
                الأجوبة الأخرى(افصلها بفاصلة)
              </Typography>
            </Typography>
            <TextField size="small" style={{ backgroundColor: 'white', border: '1px solid #ffbdcd', borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%", borderColor: '#ffbdcd' }} placeholder='1,2,3' />


          </div>
    
          <Button style={{
            marginTop: '5%',
            backgroundColor: '#ff6d91',
            borderRadius: 10,
            width: 150,
            height: 55,
            // padding:'30px',
            fontSize: '21px',
            // display:'block'
            float: "center",
            textAlign: "center",


          }}
            variant="contained"
          >
            حفظ الاختبار
          </Button>
        </DialogContent>

      </Dialog>

    </>


  )
}
