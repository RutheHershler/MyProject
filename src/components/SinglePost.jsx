import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Style } from '@mui/icons-material';
import { backdropClasses } from '@mui/material';


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

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);
    const [checked, setChecked] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    var today = new Date(),
        date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                    
                    
                  }
                  
                  title="Shrimp and Chorizo Paella"
                  subheader={date}
                />
                 <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} Typography variant="body2" color="error" />
                <CardContent>
                  <Typography variant="body2" color="error">
                    MyPost
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>
                    </Typography>
                    <Typography>
                      your text
                    </Typography>
                  </CardContent>
                </Collapse>
        </Card>
    );
}





