import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import eye from '../StudentPanel/images/eye.png'
import './style.css'

export default function LearnerType() {
  return (
    <>
      <Box
        component="div"

        sx={{ textAlign: "center", marginTop: "auto", justifyContent: "center", alignItems: "center" }}>
        <Typography>
          نتيجة الاختبار
        </Typography>
        <h3 style={{ fontSize: 24, fontWeight: 400 }}>أنت متعلّم بصري!</h3>
        <img src={eye} alt="eye" />
      </Box>

      <Box
        m={"0 auto"}
        sx={{ width: "50%" }}
      >
        <Typography
          sx={{ textAlign: "center", fontFamily: "Readex Pro", lineHeight: "45px", }}
        >
          المتعلمون المتعلمون المرئيون أو البصريون هم الذين يجدون أنه من السهل التعلم من خلال الرؤية.
          لكي يفهموا شيئًا ما، يجب أن يكونوا قادرين على رؤيته – أو على الأقل تخيله في أذهانهم.
          يتعلم بعض المتعلمين المرئيين بشكل أفضل من خلال اللغة المكتوبة ويجيدون الكتابة
          واتباع التوجيهات، بينما يجد البعض الآخر أنه من السهل التعلم من خلال المخططات
          والرسوم البيانية والصور ومقاطع الفيديو.
        </Typography>


      </Box>
      <Box
        sx={{ flexDirection: 'row', width: '100%', display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: 2 }}
      >
        <Button style={{
          marginTop: '2%',
          backgroundColor: '#622f8a ',
          borderRadius: 10,
          width: 180,
          height: 50,
          marginRight: "15px",
          fontSize: '21px',

        }}
          variant="contained"
        >  مشاركة
        </Button>
        <Button style={{
          marginTop: '2%',
          backgroundColor: ' #ff4778',
          borderRadius: 10,
          width: 180,
          height: 50,
          fontSize: '21px',
        }}
          variant="contained"
        >
          إعادة الاختبار
        </Button>
      </Box>


    </>

  )
}
