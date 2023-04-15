import React from 'react';
import { Container, Grid } from '@mui/material';
import style from '../../styles/style.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import casmatics from '../../img/casmatics.webp';
import smartwatch2 from '../../img/smartwatch2.webp';
import tshirt from '../../img/tshirt.webp';
import tshirt5 from '../../img/tshirt5.webp';

const cards = [
  {
    name: casmatics,
    title: 'casmatics'
  },
  {
    name: smartwatch2,
    title: 'Gadgets'
  },
  {
    name: tshirt,
    title: 'Mens Fashion'
  },
  {
    name: tshirt5,
    title: 'Womans Fashion'
  }
];

const BestSelling = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} mb={8}>
        <Grid item xs={12}>
          <Typography className={style.KnewaveFont} component="h3" variant='h4' mt={8} textAlign='center'>
              Best selling Categories
          </Typography>               
        </Grid>
        {
        cards.map((card) =>{
          return(
            <Grid item xs={12} sm={6} md={3} key={Math.random()} mt={8}>
              <Card className={style.myBoxShadow}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={card.name}
                />
                <CardActions>
                  <Button sx={{width: '100%'}} variant="outlined" size='large'>{card.title}</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })
        }
      </Grid>
    </Container>
  );
}

export default BestSelling;