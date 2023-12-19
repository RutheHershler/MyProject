import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [RecipeReviewCard, setRecipeReviewCard] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setRecipeReviewCard();
        setOpen(false);
    };

    return (
       
            <React.Fragment>
                <Button onClick={handleClickOpen}>
                    < AddIcon />
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>MyPost</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            write here your post
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="My Post"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>save</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
    );
}