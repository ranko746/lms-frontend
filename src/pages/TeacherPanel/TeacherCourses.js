import React, { useState } from 'react'
import { Box, Button, List, Typography, Dialog, DialogContent, TextField, } from '@mui/material';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ArrowBackIos } from '@mui/icons-material'
import { pink } from '@mui/material/colors'
import ListItem from '@mui/material/ListItem';
import layer1 from '../StudentPanel/images/Layer 1.png'
import clock from '../StudentPanel/images/clock.png'
import remove from './imagesTeacherPanel/i-remove.png'
import cursor from './imagesTeacherPanel/cursor-add.png'
const data = [
  {
    heading: "هدف التعلم: حالات المادة - تفاعل الفلزات",
    time: "3:00",
    desc: " في هذا الدرس المصور ستتعلم المزيد عن حالات المادة وتحديدًا الحالات التي تتفاعل فيها الفلزات مع بعضها، بالإضافة إلى كيفية تفاعلها مع بقية المواد"
  },
  {
    heading: "هدف التعلم: حالات المادة - تفاعل الفلزات",
    time: "3:00",
    desc: " في هذا الدرس المصور ستتعلم المزيد عن حالات المادة وتحديدًا الحالات التي تتفاعل فيها الفلزات مع بعضها، بالإضافة إلى كيفية تفاعلها مع بقية المواد"
  },

];
export default function TeacherCourses() {
  const [open, setOpen] = useState(true);
  const [btn1, setbtn1] = useState(false)
  const [btn2, setbtn2] = useState(false)
  const [btn3, setbtn3] = useState(false)

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
        <Button style={{
          backgroundColor: ' #ff4778',
          borderRadius: 10,
          width: 180,
          height: 50,
          margin: "25px 40% 35px 40%",

          fontSize: '21px',

        }}
          onClick={() => setbtn1(!btn1)}
          variant="contained"
        >
          إنشاء مقرر
        </Button>
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
            marginLeft: "20px",
            fontSize: '21px',

          }}
            onClick={() => setbtn3(!btn3)}
            variant="contained"
          >
            تعديل المقرر
          </Button>
          <Button style={{
            marginLeft: "40px",
            backgroundColor: ' #ff4778',
            borderRadius: 15,
            width: 160,
            height: 40,
            fontSize: '21px',
          }}
            variant="contained"
            onClick={() => setbtn2(!btn2)}
          >
            إضافة هدف تعلم
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
        sx={{ m: 0, p: 0, w: 40 }}
        open={btn1}
        onClose={() => setbtn1(!btn1)}
        closeAfterTransition
        style={{ cursor: 'pointer' }}

      >
        <DialogContent
          style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '350px', padding: "0 30px" }}
          sx={{ p: 2 }}>
          <Typography fontSize='40px' variant='h6' color="black" style={{ marginTop: '10px', fontWeight: "600" }}>
            إنشاء مقرر
          </Typography>
          <div dir='rtl' style={{ textAlign: 'right' }}>

            <Typography fontSize='15px' variant='h6' color="black">
              <Typography fontSize='15px' variant='h6' color="black" style={{ marginTop: '10px', marginBottom: '7px' }}>
                عنوان المقرر
              </Typography>
            </Typography>
            <TextField size="small" style={{ backgroundColor: 'white', border: '1px solid #ffbdcd', borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%", borderColor: '#ffbdcd' }} placeholder="   5 كيمياء  " />
            <Typography fontSize='15px' variant='h6' color="black">
              <Typography fontSize='15px' variant='h6' color="black" style={{ marginTop: '10px', marginBottom: '7px' }}>
                إرسال دعوة للانضمام
              </Typography>
            </Typography>
            <TextField size="small" style={{ backgroundColor: 'white', border: '1px solid #ffbdcd', marginLeft: '20px', borderRadius: "8px", width: "100%", height: "50%", borderColor: '#ffbdcd' }} placeholder="201911302@yu.edu.sa, 201829099@yu.edu.sa,..." />
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
            التالي
          </Button>
        </DialogContent>

      </Dialog>

      <Dialog
        sx={{ m: 0, p: 0, w: 30 }}
        open={btn2}
        onClose={() => setbtn2(!btn2)}
        closeAfterTransition
        style={{ cursor: 'pointer' }}
      // BackdropComponent={Backdrop}
      // BackdropProps={{
      //     timeout: 500,
      // }}
      >
        <DialogContent
          style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '580px' }}
          sx={{ p: 2, borderRadius: "40px" }}>
          <Typography fontSize='40px' variant='h6' color="black" style={{ marginTop: '10px', marginBottom: '7px' }}>
            أهداف التعلم
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
              إضافة هدف جديد
            </Button>
            <Button variant='outlined' style={{ color: "black", borderColor: 'grey', marginLeft: "20px", borderRadius: "8px" }}>العودة<i class="fa fa-chevron-right" aria-hidden="true" style={{ color: "gray", marginLeft: '3px' }}></i></Button>

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
            <Typography sx={{ paddingRight: "20px" }}> 1هدف التعلم</Typography>
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
                عنوان الهدف
              </Typography>
            </Typography>
            <TextField size="small" style={{ backgroundColor: 'white', border: '1px solid #ffbdcd', borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%", borderColor: '#ffbdcd' }} placeholder='201911302@yu.edu.sa' />
            <Typography fontSize='15px' variant='h6' color="black">
              <Typography fontSize='15px' variant='h6' color="black" style={{ marginTop: '20px', marginBottom: '7px' }}>
                الكلمات المفتاحية للبحث
              </Typography>
            </Typography>
            <TextField size="small" style={{ backgroundColor: 'white', border: '1px solid #ffbdcd', borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%", borderColor: '#ffbdcd' }} placeholder='201911302@yu.edu.sa' />
            {/* <Typography fontSize='15px' variant='h6' color="black">
                            البريد الإلكتروني
                        </Typography> */}
            {/* <TextField style={{width:'1rem'}} placeholder='البريد الإلكتروني'/> */}

          </div>
          <Button style={{
            // marginTop: '12%',
            backgroundColor: '#ff6d91',
            borderRadius: 20,
            width: "75%",
            height: 50,
            // padding:'30px',
            marginTop: '8%',
            fontSize: '21px',
            // display:'block'
            float: "center",
            textAlign: "center",


          }}
            variant="contained"
          >
            جمع موارد التعلم باستخدام الذكاء الاصطناعي
          </Button>
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
            حفظ الأهداف
          </Button>
        </DialogContent>

      </Dialog>


      <Dialog
        sx={{ m: 0, p: 0, w: 40 }}
        open={btn3}
        onClose={() => setbtn3(!btn3)}
        closeAfterTransition
        style={{ cursor: 'pointer' }}

      >
        <DialogContent
          style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '650px'}}
          sx={{ p: 2 }}>
          <Typography fontSize='40px' variant='h6' color="black" style={{ marginTop: '10px', fontWeight: "600" }}>
            نتائج البحث
          </Typography>
          <img src={cursor} alt="cursor" style={{ marginTop: "px" }} />
          <Typography style={{width:"90%", paddingLeft:"10%",marginTop:"10px"}} >
            اضغط على النتائج المناسبة لإضافتها لموارد
            التعلم لهذا الهدف التعليمي
          </Typography>
          <div dir='rtl' style={{ textAlign: 'right', marginTop: "20px" }}>

            <div
              style={{

                width: " 400px",
                height: "130px",
                borderRadius: "10px",
                backgroundColor: "#f7f7f7",
                border: "2px solid #ff6d91"

              }}>

            </div>
            <div
              style={{

                width: " 400px",
                height: "130px",
                borderRadius: "10px",
                backgroundColor: "#f7f7f7",
                marginTop: "20px"

              }}>

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
            حفظ الموارد
          </Button>
        </DialogContent>

      </Dialog>
    </>
  )
}
