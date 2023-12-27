import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import TaskSlice from '../redux/Todoslice';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../redux/Todoslice';


export default function AddTaskDialog() {
    const [open, setOpen] = React.useState(false);
    const [RecipeReviewCard, setRecipeReviewCard] = React.useState();
    const Tasks = useSelector((state) => state.TaskSlice.Task);
    const [content, setContent] = React.useState("");
    const [titel, setTitel] = React.useState("");
    const [id, setId] = React.useState(0);
    const [time, setTime] = React.useState(0);
    const Task = {
        id,
        titel,
        content,
        time,
        textbox: false
    }
    const dispatch = useDispatch()
    const handleCloseSave = () => {
        setId(id + 1)
        dispatch(Add({ task: Task }))
        handleClose()
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setRecipeReviewCard();
        setOpen(false);
    };

    return (
        <React.Fragment>
            <TaskSlice.reducer/>
            <Button onClick={handleClickOpen}>
                < AddIcon />
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>MyTasks</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        write here your task
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="My Task"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCloseSave}>save</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}