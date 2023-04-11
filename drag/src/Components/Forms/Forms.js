import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Forms() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>
                        <Card sx={{ maxWidth: 945 }}>
                            <CardMedia
                                sx={{ height: 440 }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Drop the Fields here....!
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography> */}
                            </CardContent>
                            <CardActions>
                                <Button size="small">Save</Button>
                                
                            </CardActions>
                        </Card>
                    </Item>
                </Grid>



                <Grid item xs={4}>
                    <Item>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                sx={{ height: 400 }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Save</Button>
                                
                            </CardActions>
                        </Card>
                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}