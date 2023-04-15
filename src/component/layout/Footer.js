import React from 'react';
import style from '../../styles/style.module.css';
import { Container, Grid, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Container maxWidth={false} className={style.bgDark}>
        <Grid container p={5} mt={8}>
            <Grid item xs={12} display='flex' justifyContent='center'>
                <Typography component="h6" variant='p' color='#ffffff'>Features</Typography>
                <Typography marginLeft={2} component="h6" variant='p' color='#ffffff'>Enterprise</Typography>
                <Typography marginLeft={2} component="h6" variant='p' color='#ffffff'>Support</Typography>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='center'>
                <Typography component="h6" variant='p' color='#ffffff' mt={4} p={1}><TwitterIcon /></Typography>
                <Typography component="h6" variant='p' color='#ffffff' mt={4} p={1}><FacebookIcon /></Typography>
                <Typography component="h6" variant='p' color='#ffffff' mt={4} p={1}><InstagramIcon /></Typography>
                <Typography component="h6" variant='p' color='#ffffff' mt={4} p={1}><LinkedInIcon /></Typography>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='center'>
                <Typography component="h6" variant='p' color='#ffffff' mt={2}>
                    &copy; 2023 Nima. All rights reserved
                </Typography>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Footer;