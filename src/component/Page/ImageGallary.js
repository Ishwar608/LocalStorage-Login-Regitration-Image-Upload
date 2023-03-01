import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Badge } from '@mui/material';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ImageGallary({ img }) {
    console.log(img);
    const [like, setLike] = useState(0)
    return (

        <Card sx={{ maxWidth: 345 ,m:1}}>

            <CardMedia
                component="img"
                height="194"
                image={img}
                alt="Paella dish"
            />

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => {
                    setLike(like + 1)
                }}>
                    <Badge badgeContent={like} color="primary">
                        <FavoriteIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>
        </Card>
    )
}
