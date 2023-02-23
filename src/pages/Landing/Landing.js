import { Box, Button, Dialog, DialogContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from './Components/Header'
import './Style.css'
import mainLogo from '../../assets/imgs/mainLogo.svg'
import secLogo from '../../assets/imgs/sec2logo.svg'
import sec2Logo from '../../assets/imgs/sec2secondlogo.svg'
import sec3Logo from '../../assets/imgs/sec3logo.svg'
import Footer from './Components/Footer'
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { ArrowBackIos } from '@mui/icons-material'
import { grey, pink } from '@mui/material/colors'
const Landing = () => {

    const styleBtn = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        backgroundColor: 'white',
        p: 4,
    };

    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='main'>
                <Header />
                <div style={{ marginTop: '8%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <div>
                        <Typography fontSize='41px' fontWeight='500' color="black">رحلة التعلم تبدأ باكتشاف نمطك ال</Typography>
                        <Typography fontSize='30px' variant='span' color="black">هل أنت متعلّم سمعي؟ بصري؟ حسّي؟ حركي؟</Typography>
                    </div>
                    <Button style={{
                        marginTop: '2%',
                        backgroundColor: '#ff6d91',
                        borderRadius: 10,
                        width: 180,
                        height: 50,
                        // padding:'30px',
                        fontSize: '21px',
                        // display:'block'
                    }}
                        variant="contained"
                    >
                        اكتشف نمطك!
                    </Button>
                    <div style={{ marginTop: '10px', textAlign: 'center', justifyContent: 'center', alignContent: 'center', justifyItems: 'center', }}>
                        <Typography onClick={() => setOpen(!open)} style={{ alignItems: 'center', justifyItems: 'center', cursor: 'pointer', border: 0, backgroundColor: 'transparent' }} fontSize='14px' variant='button' color="black">
                            أو سجّل الدخول
                        </Typography>
                    </div>
                    <img style={{ width: "40%", height: '50%' }} src={mainLogo} />
                </div>
                <div className='sec2'>
                    <div style={{ flexDirection: 'row', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5%', paddingBottom: '5%' }}>
                        <img style={{ width: "20%", height: '30%', marginRight: 'auto' }} src={secLogo} />
                        <div style={{ flexDirection: 'column', width: '50%', textAlign: 'center' }}>
                            <Typography fontSize='41px' variant='h4' color="#a2d2d2">ما هو نمط تعلمك؟</Typography>
                            <Typography fontSize='24px' variant='h6' color="black">منذ الطفولة، تبدأ أنماط تعلمنا بالتمايز والاختلاف، هنالك من
                                يتعلّمون بالقراءة، وهنالك من يفضّلون الحركة، هنالك السمعي والبصري
                                أيضًا، وكلٌّ منهم يحتاج ويستحق التعليم الذي يناسبه، هذا ما نؤمن به.</Typography>
                            <Button style={{
                                marginTop: '2%',
                                backgroundColor: '#ff6d91',
                                borderRadius: 10,
                                width: 180,
                                height: 50,
                                // padding:'30px',
                                fontSize: '22px',
                                // display:'block'
                            }}
                                variant="contained"
                            >
                                ابدأ الاختبار!
                            </Button>
                        </div>
                        <img style={{ width: "20%", height: '30%', marginLeft: 'auto' }} src={sec2Logo} />
                    </div>
                </div>
                <div className='sec3'>
                    <div style={{ flexDirection: 'row', width: '100%', display: 'flex', alignContent: 'center', justifyContent: 'center', paddingTop: '5%', paddingBottom: '5%' }}>
                        <img style={{ width: "40%", height: '40%', marginLeft: '20px' }} src={sec3Logo} />
                        <div dir="rtl" style={{ textAlign: 'center', width: '60%' }}>
                            <Typography fontSize='32px' variant='h6' color="#e66a48">
                                تواصل معنا
                            </Typography>
                            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', }}>
                                <TextField style={{ backgroundColor: 'white', marginLeft: '20px', width: "39%", }} placeholder='البريد الإلكتروني' />
                                <TextField style={{ backgroundColor: 'white', width: "39%", }} placeholder='الاسم الكريم' />
                            </div>
                            <TextField style={{ backgroundColor: 'white', width: "80%", marginTop: '10px' }} placeholder='الرسالة'
                                multiline
                                rows={4} />
                            <Button style={{
                                marginTop: '2%',
                                backgroundColor: '#ff6d91',
                                borderRadius: 10,
                                width: 180,
                                height: 50,
                                // padding:'30px',
                                fontSize: '22px',
                                // display:'block'
                            }}
                                variant="contained"
                            >
                                إرسال
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <Dialog
                sx={{ m: 0, p: 0, w:40 }}
                open={open}
                onClose={() => setOpen(!open)}
                closeAfterTransition
                style={{borderRadius:'100px', cursor:'pointer'}}
            // BackdropComponent={Backdrop}
            // BackdropProps={{
            //     timeout: 500,
            // }}
            >
                <DialogContent
                    style={{ borderRadius: 100, justifyContent:'center', alignItems:'center', textAlign:'center', height:'515px'}}
                    sx={{ p: 2, borderRadius: 20 }}>
                    <Typography fontSize='40px' variant='h6' color="black" style={{marginTop:'10px'}}>
                        تسجيل الدخول
                    </Typography>
                    <Button startIcon={<ArrowBackIos sx={{ color: pink[200], }} fontSize="small" />} variant='outlined' style={{ color: "black", borderColor: '#ffbdcd', borderRadius: "8px" }}>أو سجّل حسابًا جديدًا</Button>
                    <div dir='rtl' style={{textAlign:'right'}}>
                    <Typography fontSize='15px' variant='h6' color="black" style={{marginTop:'10px'}}>
                    نوع الحساب، أنت:
                    </Typography>
                    <Button variant='outlined' style={{ color: "black", borderColor: '#ffbdcd', borderRadius: "4px" ,width:'100px',marginLeft:'10px',marginRight:'10px' }}>معلّم</Button>
                    <Button variant='outlined' style={{ color: "black", borderColor: '#ffbdcd', borderRadius: "4px" ,width:'100px',marginRight:'10px'}}>أو سجّ</Button>
                    <Typography fontSize='15px' variant='h6' color="black">
                    <Typography fontSize='15px' variant='h6' color="black" style={{marginTop:'10px',marginBottom:'7px'}}>
                    البريد الإلكتروني
                    </Typography>
                    </Typography>
                    <TextField size="small" style={{ backgroundColor: 'white',border: '1px solid #ffbdcd',borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%",borderColor: '#ffbdcd' }} placeholder='البريد الإلكتروني' />
                    <Typography fontSize='15px' variant='h6' color="black">
                    <Typography fontSize='15px' variant='h6' color="black" style={{marginTop:'10px',marginBottom:'7px'}}>
                    الاسم الكامل
                    </Typography>
                    </Typography>
                    <TextField size="small" style={{ backgroundColor: 'white',border: '1px solid #ffbdcd', marginLeft: '20px' ,borderRadius: "8px", width: "100%", height: "50%",borderColor: '#ffbdcd' }} placeholder='الاسم الكامل' />
                    <Typography fontSize='15px' variant='h6' color="black">
                    <Typography fontSize='15px' variant='h6' color="black" style={{marginTop:'10px',marginBottom:'7px'}}>
                    كلمة السر
                    </Typography>
                    </Typography>
                    <TextField size="small"  variant="outlined" style={{ backgroundColor: 'white' ,borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%" ,border: '1px solid #ffbdcd'}} placeholder='*******' />
                    
                        {/* <Typography fontSize='15px' variant='h6' color="black">
                            البريد الإلكتروني
                        </Typography> */}
                        {/* <TextField style={{width:'1rem'}} placeholder='البريد الإلكتروني'/> */}
                        
                    </div>
                    <Button style={{
                        marginTop: '12%',
                        backgroundColor: '#ff6d91',
                        borderRadius: 10,
                        width: 150,
                        height: 55,
                        // padding:'30px',
                        fontSize: '21px',
                        // display:'block'
                        float:"center",
                        textAlign:"center",


                    }}
                        variant="contained"
                    >
                        اكتشف نمطك!
                    </Button>
                </DialogContent>
                
            </Dialog>
            <Dialog
                sx={{ m: 0, p: 0, w:40 }}
                // open={open}
                // onClose={() => setOpen(!open)}
                // closeAfterTransition
                style={{borderRadius:'100px', cursor:'pointer'}}
            // BackdropComponent={Backdrop}
            // BackdropProps={{
            //     timeout: 500,
            // }}
            >
                <DialogContent
                    style={{ borderRadius: 100, justifyContent:'center', alignItems:'center', textAlign:'center', height:'355px'}}
                    sx={{ p: 2, borderRadius: 20 }}>
                    <Typography fontSize='40px' variant='h6' color="black" style={{marginTop:'10px',marginBottom:'7px'}}>
                    تسجيل الدخول
                    </Typography>
                    <Button startIcon={<ArrowBackIos sx={{ color: pink[200], }} fontSize="small" />} variant='outlined' style={{ color: "black", borderColor: '#ffbdcd', borderRadius: "8px" }}>أو سجّل حسابًا جديدًا</Button>
                    <div dir='rtl' style={{textAlign:'right'}}>
                    <Typography fontSize='15px' variant='h6' color="black">
                    <Typography fontSize='15px' variant='h6' color="black" style={{marginTop:'10px',marginBottom:'7px'}}>
                    البريد الإلكتروني
                    </Typography>
                    </Typography>
                    <TextField size="small" style={{ backgroundColor: 'white',border: '1px solid #ffbdcd',borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%",borderColor: '#ffbdcd' }} placeholder='البريد الإلكتروني' />
                    <Typography fontSize='15px' variant='h6' color="black">
                    <Typography fontSize='15px' variant='h6' color="black" style={{marginTop:'10px',marginBottom:'7px'}}>
                    كلمة السر
                    </Typography>
                    </Typography>
                    <TextField size="small"  variant="outlined" style={{ backgroundColor: 'white' ,borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%" ,border: '1px solid #ffbdcd'}} placeholder='*******' />
                    
                        {/* <Typography fontSize='15px' variant='h6' color="black">
                            البريد الإلكتروني
                        </Typography> */}
                        {/* <TextField style={{width:'1rem'}} placeholder='البريد الإلكتروني'/> */}
                        
                    </div>
                    <Button style={{
                        marginTop: '12%',
                        backgroundColor: '#ff6d91',
                        borderRadius: 10,
                        width: 150,
                        height: 55,
                        // padding:'30px',
                        fontSize: '21px',
                        // display:'block'
                        float:"center",
                        textAlign:"center",


                    }}
                        variant="contained"
                    >
                سجّل الدخول! 
                    </Button>
                </DialogContent>
                
            </Dialog>
            <Dialog
                sx={{ m: 0, p: 0, w:40 }}
                // open={open}
                // onClose={() => setOpen(!open)}
                // closeAfterTransition
                style={{borderRadius:'100px', cursor:'pointer'}}
            // BackdropComponent={Backdrop}
            // BackdropProps={{
            //     timeout: 500,
            // }}
            >
                <DialogContent
                    style={{ borderRadius: 100, justifyContent:'center', alignItems:'center', textAlign:'center', height:'320px'}}
                    sx={{ p: 2, borderRadius: 20 }}>
                    <Typography fontSize='40px' variant='h6' color="black" style={{marginTop:'10px',marginBottom:'7px'}}>
                    نسيت كلمة السر
                    </Typography>
                    <Button  variant='outlined' style={{ color: "black", borderColor: 'grey', borderRadius: "8px" }}>العودة<i class="fa fa-chevron-right" aria-hidden="true" style={{color:"grey", marginLeft:"3px"}}></i></Button>
                    <div dir='rtl' style={{textAlign:'right'}}>
                    <Typography fontSize='15px' variant='h6' color="black">
                    <Typography fontSize='15px' variant='h6' color="black" style={{marginTop:'40px',marginBottom:'7px'}}>
                    البريد الإلكتروني
                    </Typography>
                    </Typography>
                    <TextField size="small" style={{ backgroundColor: 'white',border: '1px solid #ffbdcd',borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%",borderColor: '#ffbdcd' }} placeholder='201911302@yu.edu.sa' />
                    
                        {/* <Typography fontSize='15px' variant='h6' color="black">
                            البريد الإلكتروني
                        </Typography> */}
                        {/* <TextField style={{width:'1rem'}} placeholder='البريد الإلكتروني'/> */}
                        
                    </div>
                    <Button style={{
                        marginTop: '12%',
                        backgroundColor: '#ff6d91',
                        borderRadius: 10,
                        width: 150,
                        height: 55,
                        // padding:'30px',
                        fontSize: '21px',
                        // display:'block'
                        float:"center",
                        textAlign:"center",


                    }}
                        variant="contained"
                    >
               توثيق البريد  
                    </Button>
                </DialogContent>
                
            </Dialog>
            <Dialog
                sx={{ m: 0, p: 0, w:40 }}
                // open={open}
                // onClose={() => setOpen(!open)}
                // closeAfterTransition
                style={{borderRadius:'100px', cursor:'pointer'}}
            // BackdropComponent={Backdrop}
            // BackdropProps={{
            //     timeout: 500,
            // }}
            >
                <DialogContent
                    style={{ borderRadius: 100, justifyContent:'center', alignItems:'center', textAlign:'center', height:'320px'}}
                    sx={{ p: 2, borderRadius: 20 }}>
                    <Typography fontSize='40px' variant='h6' color="black" style={{marginTop:'10px',marginBottom:'7px'}}>
                    إعادة تعيين كلمة السر
                    </Typography>
                    <Button  variant='outlined' style={{ color: "black", borderColor: 'grey', borderRadius: "8px" }}>العودة<i class="fa fa-chevron-right" aria-hidden="true" style={{color:"gray",marginLeft:'3px'}}></i></Button>
                    <div dir='rtl' style={{textAlign:'right'}}>
                    <Typography fontSize='15px' variant='h6' color="black">
                    <Typography fontSize='15px' variant='h6' color="black" style={{marginTop:'40px',marginBottom:'7px'}}>
                    كلمة السر الجديدة
                    </Typography>
                    </Typography>
                    <TextField size="small" style={{ backgroundColor: 'white',border: '1px solid #ffbdcd',borderRadius: "8px", marginLeft: '20px', width: "100%", height: "50%",borderColor: '#ffbdcd' }} placeholder='201911302@yu.edu.sa' />
                    
                        {/* <Typography fontSize='15px' variant='h6' color="black">
                            البريد الإلكتروني
                        </Typography> */}
                        {/* <TextField style={{width:'1rem'}} placeholder='البريد الإلكتروني'/> */}
                        
                    </div>
                    <Button style={{
                        marginTop: '12%',
                        backgroundColor: '#ff6d91',
                        borderRadius: 10,
                        width: 150,
                        height: 55,
                        // padding:'30px',
                        fontSize: '21px',
                        // display:'block'
                        float:"center",
                        textAlign:"center",


                    }}
                        variant="contained"
                    >
               حفظ     
                    </Button>
                </DialogContent>
                
            </Dialog>
            
        </>
    )
}

export default Landing