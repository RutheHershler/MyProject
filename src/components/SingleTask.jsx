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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';



export default function TaskCard() {
    // const [expanded, setExpanded] = React.useState(false);
    const [checked, setChecked] = React.useState(true);
    

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    var today = new Date(),
        date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

    return (
        <>
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
                    title="MyTask"
                    subheader={date}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        enter your tasks

                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Delete">
                        <DeleteForeverIcon />
                    </IconButton>
                    <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </CardActions>
            </Card>
        </>
    );
}





