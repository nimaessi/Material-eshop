import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import style from '../../styles/style.module.css';

const ProductCard = ({products,mainTitle}) => {
  return (
    <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography className={style.KnewaveFont} component="h5" variant='h4' mt={8} textAlign='center'>
                    {mainTitle}
                </Typography>               
            </Grid>
            {
                products.map((product) =>{
                    return(
                    <Grid item xs={12} sm={6} md={3} key={Math.random()} mt={5}>
                        <Card className={style.myBoxShadow} sx={{ maxWidth: 500 }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{marginTop:'15px'}}
                                    component="img"
                                    height="140"
                                    image={product.src}
                                    alt="green iguana"
                                />
                                <CardContent sx={{textAlign: 'center'}}>
                                <Typography gutterBottom variant="h6" component="p">
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {product.price}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button sx={{width: '50%'}} size="small" variant="contained" color="primary">
                                 View
                                </Button>
                                <Button sx={{width: '50%'}} size="small" variant='contained' color="success">
                                 Add to cart
                                </Button>
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

export default ProductCard;