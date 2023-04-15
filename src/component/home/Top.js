import React from 'react';
import style from '../../styles/style.module.css';
import { Container } from '@mui/material';
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';

const Top = () => {
  return (
    <Container className={style.heroImage} maxWidth={false}>
        <Grid container className={style.topContainer}>
            <Grid item xs={12} sx={{display: 'flex', alignItems: 'center'}}>
              <Typography 
                component="p"
                variant='h4'
                className={style.firstTypo}>
                  New collection 2023
              </Typography>
            </Grid>
        </Grid>
      </Container>
  );
}

export default Top;