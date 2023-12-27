import React from "react";
import TaskCard from "./SingleTask"
import AddTaskDialog from "./AddTask"
import { useDispatch, useSelector } from 'react-redux';


const ToDo = () => {

    const Tasks = useSelector((state) => state.TaskSlice.Task);

    return (
        <>
            <h1>המשימות שלי</h1>
            {
                Tasks.map((t) => {
                    return (
                        <TaskCard element={t} />
                    )
                })
            }
            <AddTaskDialog />
        </>
    );
}
export default ToDo;