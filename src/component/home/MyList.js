import React from 'react';
import { Container } from '@mui/material';
import { Grid } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaymentIcon from '@mui/icons-material/Payment';
import style from '../../styles/style.module.css';

const MyList = () => {
  return (
    <Container maxWidth="lg">
        <Grid container className={style.myBoxShadow} mt={8}>
            <Grid item xs={12} sm={6} lg={3}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <LocalShippingIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Fast Delivery" secondary="Start from $10" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <AttachMoneyIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Money Guarantee" secondary="7 Days Back" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <AccessTimeIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="365 Days" secondary="For free return" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <PaymentIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Payment" secondary="Secure system" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
  </Container>
  )
}

export default MyList